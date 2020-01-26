import store from "Store/Volume"

export default class {
    name = "SIN"
    constructor(){
    }
    source 
    playStartTime = null
    getWave({volume , frequency , soundOn}){
        if(soundOn){
            const audioCtx = new window.AudioContext();
            const source = audioCtx.createBufferSource()
            const channels = 1
            const frameCount = audioCtx.sampleRate * 2.0

            const myArrayBuffer = audioCtx.createBuffer(channels , frameCount, audioCtx.sampleRate)

            this.playStartTime = this.playStartTime || new Date().getTime()
            const nowBufferings = []
            for (let channel = 0; channel < channels; channel++) {
                let nowBuffering = myArrayBuffer.getChannelData(channel);
                nowBufferings.push(nowBuffering)
            }
            let gain 
            for (let i = 0; i < frameCount; i++) {
                gain = this.getGainByTime(1000 * i / frameCount)
                nowBufferings.forEach((nowBuffering)=>{
                    nowBuffering[i] += gain * volume * 0.3 * Math.sin(frequency * ( i / audioCtx.sampleRate ) * 2 * Math.PI)
                })
            }

            source.buffer = myArrayBuffer
            source.connect(audioCtx.destination)
            source.addEventListener("ended" , ()=>{
                this.getWave(store.getState())
            })
            source.start()

            this.source = source
        }else{
            if(!this.source){
                return
            }
            this.source.stop()
            this.source = null 
            this.playStartTime = null
        }
    }

    getGainByTime(deltaTime){
        const now =  new Date().getTime()
        const timeStandardization = 50 // スライダーは0~100。秒数換算して最大5秒間くらい欲しいので100を5000にするようにする
        let dt = now - this.playStartTime + deltaTime

        let {
            attackTime  , 
            attackGain  , 
            decayTime   , 
            decayGain   , 
            sustainTime , 
            sustainGain , 
            releaseTime , 
            releaseGain , 
        } = store.getState()

        attackTime  *= timeStandardization
        decayTime   *= timeStandardization 
        sustainTime *= timeStandardization
        releaseTime *= timeStandardization

        attackGain  /= 100 
        decayGain   /= 100  
        sustainGain /= 100 
        releaseGain /= 100 

        if(dt < attackTime ){
            return attackGain * dt / attackTime 
        }
        dt -= attackTime

        if(dt < decayTime ){
            return decayGain - (attackGain - decayGain) * dt / decayTime
        }
        dt -= decayTime
        return decayGain 

        // if(dt < sustainTime){
        //     return (decayGain - sustainGain) / 100 * dt / decayTime
        // }
        // dt -= sustainTime

        // if(dt < releaseTime){
        //     return (sustainGain - releaseGain) / 100 * dt / decayTime
        // }
        // return releaseGain
    }
}
