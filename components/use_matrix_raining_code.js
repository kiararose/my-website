import { useEffect, useRef, useState } from 'react';

const useMatrixRainingCode = (draw) => {
  
    const canvasRef = useRef(null)

    const [isResized, setIsResized] = useState(false)

    useEffect(() => {
      
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        var letters = '01010101011010101010101001010111000101100101010101010110001101';
        letters = letters.split('');

        var fontSize = 18
        var columns
        var drops = []

        const handleResize = () => {
            context.canvas.height = window.innerHeight;
            context.canvas.width = window.innerWidth;
            columns = context.canvas.width / fontSize;
            setIsResized(true)

            for (var i = 0; i < columns; i++) {
                drops[i] = 1;
            }

            
        }
      
        handleResize();

        window.addEventListener("resize", handleResize);
        

        const interval = setInterval(() => {
            draw(context, letters, fontSize, drops)
        }, 50)

        return () =>  clearInterval(interval)
    }, [draw, isResized])
    
    return canvasRef
}

export { useMatrixRainingCode };