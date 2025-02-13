import { myResumePDF } from "../Assets/utilities"




const PdfViewer = ({pdfUrl, height, width}) => {





    return(
        <iframe
      src={`${myResumePDF}#view=Fit`}
      title="PDF Viewer"
      width={`${width}%`}
      height={`${height}%`}
      style={{ border: 'none' }}
    />
    )
}


export default PdfViewer;