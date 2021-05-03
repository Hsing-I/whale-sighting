import CountCard from './CountCard';
import './CountList.scss';

export default function CountList(props) {

  return (<div className="countlist">
    {props.count.length > 0 && <CountCard count={props.count} speiceName={props.specieName} />}
  </div>);
}