import hamburger from '../../assets/shared/mobile/icon-hamburger.svg';
import AppTitle from '../AppTitle';

const MobileHeader = () => {
  return (
    <div className="mobile-header-bg flex w-full items-center justify-between p-5 md:hidden">
      <div>
        <AppTitle />
      </div>

      <div>
        <img src={hamburger} alt="hamburger" />
      </div>
    </div>
  );
};
export default MobileHeader;
