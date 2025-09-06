'use client';
import { resumen } from '@/src/lib/constants';
import { PDFViewer, ResumeDocument } from '@/src/app/components/pdf';
import { pdf } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

export default function ResumePage() {
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    (async () => {
      const blob = await pdf(<ResumeDocument resume={resumen} />).toBlob();
      setPdfUrl(URL.createObjectURL(blob));
    })();
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (isMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen p-4">
        <p className="mb-4">Este visor no funciona en móvil. Descarga/abre el PDF:</p>
        <a
          href={pdfUrl}
          download="cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Descargar CV
        </a>
      </div>
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <PDFViewer style={{ width: '100%', height: '100%', border: 'none' }}>
        <ResumeDocument resume={resumen} />
      </PDFViewer>
    </div>
  );
}
