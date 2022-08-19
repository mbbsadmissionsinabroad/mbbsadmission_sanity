import { urlFor } from '../lib/client';
import {PortableText} from '@portabletext/react';

function TextSerializer(props) {

	const { data } = props;

	const serializers = {
		types: {
			image: ({value}) => <img src={urlFor(value)} />,
			code: ({value}) => <div dangerouslySetInnerHTML={{__html: value.code}} />	
		},
		block: {
			p: ({children}) => <p>{children}</p>,
			h1: ({children}) => <h1 className='serializerTitle'>{children}</h1>,
			h2: ({children}) => <h2 className='serializerTitle'>{children}</h2>,
			h3: ({children}) => <h3 className='serializerTitle'>{children}</h3>,
			h4: ({children}) => <h4 className='serializerTitle'>{children}</h4>,
			h5: ({children}) => <h5 className='serializerTitle'>{children}</h5>,
			h6: ({children}) => <h6 className='serializerTitle'>{children}</h6>,
			blockquote: ({children}) => <blockquote>{children}</blockquote>,
		},
		list: {
			bullet: ({children}) => <ul>{children}</ul>,
			number: ({children}) => <ol>{children}</ol>,
		},
		listItem: {
			bullet: ({children}) => <li style={{ paddingBottom: '7px' }}>{children}</li>,
			// checkmarks: ({children}) => <li>✅ {children}</li>,
		},
	}

	return (
		<PortableText value={data} components={serializers} />
	)
}

export default TextSerializer