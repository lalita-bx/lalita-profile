import {CopyToClipboard} from 'react-copy-to-clipboard';
import { 
    IconButton,
    Tooltip, 
} from "@material-tailwind/react";

const Contact = () =>{
    
    return (
        <div className="card-body flex flex-wrap flex-col items-center justify-center">
            <div className='text-xl text-left'>

                <div><i className="pr-3 fas fa-envelope" /> lalita.yodsri@gmail.com 
                    <CopyToClipboard text='lalita.yodsri@gmail.com'
                        onCopy={() => console.log('copied')}>
                        <Tooltip content="Copy to Clipboard" placement="right-end">
                            <IconButton variant="text" size="sm" className='pt-3'>
                                <i className="far fa-copy fa-xl" />
                            </IconButton>
                        </Tooltip>
                    </CopyToClipboard>
                </div>
                <div><i className="pl-0.5 pr-3.5 fas fa-mobile-alt" /> 065-347-0896</div>
                
                <div><i className="pl-0.5 pr-3.5 fas fa-id-badge" /> My <a href="https://drive.google.com/file/d/1qiMjVNmfqAcZxVXf3sEj-5c0fRoff8_H/view?usp=sharing" target="blank" className="font-bold text-deep-purple-400 hover:text-deep-purple-900">resume <i className="fas fa-external-link-alt fa-xs" /></a></div>

            </div>
        </div>
    );
}

export default Contact
