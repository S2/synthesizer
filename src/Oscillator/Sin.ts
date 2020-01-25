export default class {
    name = "SIN"
    constructor(){
    }
    source 
    getWave({volume , frequency , soundOn}){
        if(soundOn){
            const audioCtx = new window.AudioContext();
            const source = audioCtx.createBufferSource()
            const channels = 2
            const frameCount = audioCtx.sampleRate * 2.0

            const myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate)

            for (let channel = 0; channel < channels; channel++) {
                let nowBuffering = myArrayBuffer.getChannelData(channel);
                for (let i = 0; i < frameCount; i++) {
                    nowBuffering[i] += volume * 0.3 * Math.sin(frequency * ( i / audioCtx.sampleRate ) * 2 * Math.PI)
                }
            }

            source.buffer = myArrayBuffer
            source.connect(audioCtx.destination)
            source.loop = true
            source.start()
            this.source = source
        }else{
            this.source.stop()
            this.source = null 
        }
    }
}
