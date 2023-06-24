import './style.less';
import logo from '@/static/img/home/logo.png';

const SystemTitle = (props) => {
	const { title = '中宇清能 安钒达光储碳系统' } = props;
	console.log(' propspropsprops ： ', props, title);
	return (
		<div className='systemTitle'>
			<img src={logo} className='logo' />
			<div className='title'>{title}</div>
		</div>
	);
};

SystemTitle.defaultProps = {
	title: '中宇清能 安钒达光储碳系统',
};

export default SystemTitle;
