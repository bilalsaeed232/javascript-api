//check if this browser is supported
if (typeof registerPaint !== 'undefined') {
    class SampleCSSPaint {

        //use to return property names defined in css
        static get inputProperties() {
            return ['--cross-thickness', '--cross-color', '--cross-bg-color']
        }

        //all drawing goes in this function: just like canvas
        paint(ctx, size, props) {
            //get all the property values came from inputProperties
            let width = props.get('--cross-thickness');
            let color = props.get('--cross-color').toString();
            let bgColor = props.get('--cross-bg-color').toString();
            console.info(bgColor);

            ctx.fillStyle = bgColor;

            //for background color of canvas
            ctx.fillRect(0, 0, size.width, size.height);

            ctx.lineWidth = width;
            ctx.strokeStyle = color;


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