import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import { resumen } from '../../lib/constants';
import { ResumeDocument } from './document';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const nameCv = `${resumen.basics.firstName} ${resumen.basics.middleName} ${resumen.basics.lastName}`;
    
    if (!resumen) {
      return NextResponse.json({ error: 'No se encontraron datos' }, { status: 404 });
    }
    
    const TemplateComponent = ResumeDocument;

    const showImage = searchParams.get('img') === 'true';

    const buffer = await renderToBuffer(
      <TemplateComponent
        resumen={resumen} showImage={showImage}/>
    );

    const response = new NextResponse(buffer);
    response.headers.set('Content-Type', 'application/pdf');

    const preview = searchParams.get('preview') === 'true';
    response.headers.set(
      'Content-Disposition',
      preview
        ? `inline; filename="curriculum-vitae-${nameCv}.pdf"`
        : `attachment; filename="curriculum-vitae-${nameCv}.pdf"`
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
