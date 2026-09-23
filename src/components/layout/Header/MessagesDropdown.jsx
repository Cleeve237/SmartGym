import MessageItem from './MessageItem';

const messages = [
  { id: 1, name: 'Clarisse N.', initials: 'CN', color: '#8B5CF6', lastMsg: 'Merci pour la séance !', time: '10 min', unread: true },
  { id: 2, name: 'Franck F.', initials: 'FF', color: '#F97316', lastMsg: 'Quand peut-on reprogrammer ?', time: '2h', unread: true },
  { id: 3, name: 'Amina B.', initials: 'AB', color: '#16A34A', lastMsg: 'Les exercices marchent bien', time: '1j', unread: false },
];

export default function MessagesDropdown({ count = messages.filter(m => m.unread).length }) {
  return (
    <div className="hd-dropdown">
      <button className="hd-action-btn" aria-label={`Messages (${count} non lus)`}>
        <i className="bi bi-chat-dots" />
        {count > 0 && <span className="hd-badge-count">{count}</span>}
      </button>
      <div className="hd-dropdown-menu" style={{ minWidth: '320px' }}>
        <div className="hd-dropdown-header">Messages ({messages.length})</div>
        {messages.map(m => <MessageItem key={m.id} {...m} />)}
        <div className="hd-dropdown-footer">
          <a href="/messages">Voir tous les messages</a>
        </div>
      </div>
    </div>
  );
}
