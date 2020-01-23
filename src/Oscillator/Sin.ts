export default class {
    name = "SIN"
    constructor(){
    }
    getWave(){
        {
            const audioCtx = new window.AudioContext();
            
            const channels = 2
            const frameCount = audioCtx.sampleRate * 2.0

            const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate)

            for (let channel = 0; channel < channels; channel++) {
                let nowBuffering = myArrayBuffer.getChannelData(channel);
                for (let i = 0; i < frameCount; i++) {
                    nowBuffering[i] += 0.05  * Math.sin(440 * ( i / audioCtx.sampleRate ) * 2 * Math.PI)
                    nowBuffering[i] += 0.5 * Math.sin(440 * 2 * 1.5 * ( i / audioCtx.sampleRate ) * 2 * Math.PI)
                }
            }

            let source = audioCtx.createBufferSource()
            source.buffer = myArrayBuffer
            source.connect(audioCtx.destination)
            // source.loop = true
            source.start()
        }
    }
}
