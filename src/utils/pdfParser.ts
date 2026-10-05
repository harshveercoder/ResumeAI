export const MAX_FILE_SIZE_BYTES = 10 * 1024 * 1024; // 10 MB

export const validatePdfFile = (file: File): { isValid: boolean; error?: string } => {
  const isPdfType = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
  
  if (!isPdfType) {
    return {
      isValid: false,
      error: 'Invalid file format. Please upload a PDF file (.pdf).',
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      isValid: false,
      error: `File size exceeds 10 MB limit (${formatFileSize(file.size)}).`,
    };
  }

  return { isValid: true };
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
