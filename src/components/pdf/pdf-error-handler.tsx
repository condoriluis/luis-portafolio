'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export const PDFErrorHandler = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const errorMessage = searchParams.get('message');

  useEffect(() => {
    if (error) {
      console.error('Error al generar el PDF', {
        description: errorMessage || 'Ha ocurrido un problema al generar el documento.',
      });
    }
  }, [error, errorMessage]);

  return null;
};