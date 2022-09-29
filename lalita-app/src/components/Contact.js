import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

const Contact = () => {

    return (
        <div className="grid place-content-center h-96 pt-14 md:pt-40 text-justify text-base md:text-2xl overflow-y-auto">
            <div>
                <i className="pr-4 fas fa-envelope" />
                <p className="inline-block text-sm md:text-2xl">lalita.yodsri@gmail.com</p>
                <CopyToClipboard text='lalita.yodsri@gmail.com'
                    onCopy={() => console.log('copied')}>
                    <IconButton variant="text" size="sm" className='pt-3'>
                        <Tooltip content="Copy to Clipboard" placement="right-end">
                            <i className="far fa-copy fa-xl" />
                        </Tooltip>
                    </IconButton>
                </CopyToClipboard>
            </div>
            <div><i className="pl-0.5 pr-3.5 fas fa-mobile-alt" /> 065-347-0896</div>
            <div><i className="pl-0.5 pr-3.5 fas fa-id-badge" /> My <a href="https://drive.google.com/file/d/1VT_rgZa_wD1f9DOw_6QvaBWZfJaUCFd9/view?usp=sharing" target="blank" className="font-bold text-deep-purple-400 hover:text-deep-purple-900">resume <i className="fas fa-external-link-alt fa-xs" /></a></div>

        </div>
    );
}

export default Contact
