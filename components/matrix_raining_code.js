import { useMatrixRainingCode } from './use_matrix_raining_code'

const MatrixCanvas = ({ draw }) => {  
    const canvasRef = useMatrixRainingCode(draw)

    return (
        <canvas ref={canvasRef} />
    )
}

const Matrix = () => { 

    const draw = (context, letters, fontSize, drops) => {
        context.fillStyle = 'rgba(0, 0, 0, 0.1)';
        context.fillRect(0, 10, context.canvas.width, context.canvas.height);
        context.font = "600 16px Josefin Sans";

        for (var i = 0; i < drops.length; i++) {
            var text = letters[Math.floor(Math.random() * letters.length)];
            // context.fillStyle = '#FF33E9'
            context.fillStyle = '#f495bf'
            context.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            
            if (drops[i] * fontSize > context.canvas.height && Math.random() > .95) {
                drops[i] = 0;
            }
        }
    }

    return (
        <MatrixCanvas draw={draw} />
    )
}

export default Matrix;