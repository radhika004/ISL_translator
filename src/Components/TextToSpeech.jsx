import TextToSpeechIMG from "./../assets/TexttospeechIMG.png";
import './TextToSpeech.css'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
function TextToSpeech(){
    return(
        <div>
            <h1 className="text_speech">Sign to Text</h1>
            <img src={TextToSpeechIMG} height={500} className="text_img"/>
            <p  className="input_text">Generated text ...</p>
            <a href="#" className="icon_speech1">
              <VolumeUpIcon  fontSize="large" />
            </a>
        </div>
    )
}
export default TextToSpeech;