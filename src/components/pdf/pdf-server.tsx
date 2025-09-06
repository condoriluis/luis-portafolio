import { PDFViewer as PDFViewerRenderer, PDFDownloadLink as PDFDownloadLinkRenderer, Font } from '@react-pdf/renderer';

Font.register({
  family: 'Ubuntu',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/ubuntu/v20/4iCs6KVjbNBYlgo6eA.ttf', fontWeight: 400, fontStyle: 'normal' },
    { src: 'https://fonts.gstatic.com/s/ubuntu/v20/4iCu6KVjbNBYlgoKeg7z.ttf', fontWeight: 400, fontStyle: 'italic' },
    { src: 'https://fonts.gstatic.com/s/ubuntu/v20/4iCv6KVjbNBYlgoCxCvTtw.ttf', fontWeight: 700, fontStyle: 'normal' },
  ]
});

Font.register({
  family: 'Geist',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI_RnOM4nQ.ttf', fontWeight: 400, fontStyle: 'normal' },
    { src: 'https://fonts.gstatic.com/s/geist/v1/gyBhhwUxId8gMGYQMKR3pzfaWI_Re-Q4nQ.ttf', fontWeight: 700, fontStyle: 'normal' },
  ]
});

export const PDFViewer = PDFViewerRenderer;
export const PDFDownloadLink = PDFDownloadLinkRenderer;
