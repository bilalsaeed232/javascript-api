//check if this browser is supported
if (typeof registerPaint !== 'undefined') {
    class SampleCSSPaint {

        //all drawing goes in this function: just like canvas
        paint(ctx, size, props) {
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'red';

            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(size.width, size.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(size.width, 0);
            ctx.lineTo(0, size.height);
            ctx.stroke();
        }
    }

    // the name 'drawcross' to be used by css
    registerPaint('drawcross', SampleCSSPaint);
}