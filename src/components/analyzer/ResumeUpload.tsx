import React, { useRef, useState } from 'react';
import { UploadCloud, FileText, Trash2, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { formatFileSize, validatePdfFile } from '../../utils/pdfParser';

interface ResumeUploadProps {
  selectedFile: File | null;
  onFileSelect: (file: File | null) => void;
}

export const ResumeUpload: React.FC<ResumeUploadProps> = ({ selectedFile, onFileSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (file: File | undefined) => {
    if (!file) return;
    const validation = validatePdfFile(file);
    if (!validation.isValid) {
      setErrorMessage(validation.error || 'Invalid file format');
      onFileSelect(null);
    } else {
      setErrorMessage(null);
      onFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.25rem' }}>
          Upload your resume
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          PDF files only. Maximum size: 10 MB.
        </p>
      </div>

      {/* File Dropzone / Active File State */}
      {!selectedFile ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          style={{
            flex: 1,
            minHeight: '240px',
            border: `2px dashed ${isDragOver ? 'var(--brand-primary)' : 'var(--border-color)'}`,
            borderRadius: 'var(--radius-lg)',
            backgroundColor: isDragOver ? 'var(--brand-primary-light)' : 'var(--bg-main)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            cursor: 'pointer',
            textAlign: 'center',
            transition: 'all var(--transition-fast)',
          }}
        >
          <input
            type="file"
            ref={fileInputRef}
            accept=".pdf,application/pdf"
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e.target.files?.[0])}
          />

          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            backgroundColor: '#ffffff',
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--brand-primary)',
            marginBottom: '1rem',
          }}>
            <UploadCloud size={30} />
          </div>

          <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.35rem' }}>
            Drop your resume here or <span className="gradient-text">Browse files</span>
          </p>

          <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            PDF • Maximum 10 MB
          </span>
        </div>
      ) : (
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1.5rem',
          borderRadius: 'var(--radius-lg)',
          backgroundColor: 'var(--brand-primary-light)',
          border: '1px solid #c7d2fe',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--brand-primary)',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <FileText size={26} />
            </div>

            <div style={{ flex: 1, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <h4 style={{
                  fontSize: '0.975rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}>
                  {selectedFile.name}
                </h4>
                <CheckCircle2 size={16} style={{ color: '#10b981', minWidth: '16px' }} />
              </div>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                {formatFileSize(selectedFile.size)} • PDF Document
              </p>
            </div>

            <button
              onClick={() => onFileSelect(null)}
              className="btn btn-secondary"
              style={{
                padding: '0.5rem',
                borderRadius: 'var(--radius-md)',
                color: 'var(--status-danger-accent)',
                borderColor: '#fecaca',
                backgroundColor: '#ffffff',
              }}
              title="Remove File"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Error Message Toast */}
      {errorMessage && (
        <div style={{
          marginTop: '1rem',
          padding: '0.75rem 1rem',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--status-danger-bg)',
          border: '1px solid var(--status-danger-border)',
          color: 'var(--status-danger-text)',
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <AlertTriangle size={16} style={{ minWidth: '16px' }} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
