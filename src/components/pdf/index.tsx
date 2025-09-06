'use client';

import dynamic from 'next/dynamic';
import { Loader2 } from 'lucide-react';

export const PDFViewer = dynamic(
  () => import('./pdf-server').then((m) => m.PDFViewer),
  { ssr: false, loading: () => <>Cargando...</> }
);

export const PDFDownloadLink = dynamic(
  () => import('./pdf-server').then((m) => m.PDFDownloadLink),
  {
    ssr: false,
    loading: () => (
      <button disabled>
        <Loader2 className='animate-spin' />
        Cargando...
      </button>
    ),
  }
);