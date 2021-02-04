interface ExternalLinkProps {
  href?: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => (
  <a
    className="text-sm text-gray-100 text-opacity-70 hover:text-opacity-100 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default ExternalLink;
