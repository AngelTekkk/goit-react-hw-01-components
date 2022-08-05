import PropTypes, { element } from 'prop-types';
import s from 'components/Container/Container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.array,
};

export default Container;
