import { Error403, Error404, Error500, Maintenance, ComingSoon, Offline } from '../../assets/illustrations/SystemIllustrations';

const ICONS = { '403': Error403, '404': Error404, '500': Error500, maintenance: Maintenance, comingsoon: ComingSoon, offline: Offline };

export default function ErrorIllustration({ type = '404' }) {
  const Icon = ICONS[type] || Error404;
  return (
    <div className="sys-illustration" aria-hidden="true">
      <Icon />
    </div>
  );
}
