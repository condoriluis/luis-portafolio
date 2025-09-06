import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { resumen } from '../../lib/constants';
import { ResumeDocument } from './document';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const resumenData = await resumen;
    
    if (!resumenData) {
      return NextResponse.json({ error: 'No se encontraron datos' }, { status: 404 });
    }
    

    const TemplateComponent = ResumeDocument;

    const buffer = await renderToBuffer(
      <TemplateComponent
        resumen={resumenData}/>
    );

    const response = new NextResponse(buffer);
    response.headers.set('Content-Type', 'application/pdf');

    const preview = searchParams.get('preview') === 'true';
    response.headers.set(
      'Content-Disposition',
      preview
        ? `inline; filename="curriculum.pdf"`
        : `attachment; filename="curriculum.pdf"`
    );

    return response;
  } catch (error) {
    
    return NextResponse.json(
      { 
        error: 'Error al generar el PDF', 
        message: 'Ha ocurrido un problema al generar el documento PDF. Por favor, inténtelo de nuevo más tarde.',
        details: error instanceof Error ? error.message : 'Error desconocido',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
