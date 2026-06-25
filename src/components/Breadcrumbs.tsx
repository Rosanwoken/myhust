import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const breadcrumbs: BreadcrumbItem[] = pathnames.map((name, index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    
    // Format label: capitalize and replace hyphens with spaces
    let label = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
    
    // Special handling for dynamic IDs if needed (could be improved with a lookup)
    if (name === 'cri') label = 'CRI';
    if (name === 'ciss') label = 'CISS';
    if (name === 'tcmhs') label = 'TCMHS';
    if (name === 'cecs') label = 'CECS';
    if (name === 'cales') label = 'CALES';
    if (name === 'cbles') label = 'CBLES';

    return { label, path };
  });

  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-hust-blue transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.path}>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
              <Link
                to={breadcrumb.path}
                className={`ml-1 text-sm font-medium md:ml-2 transition-colors ${
                  index === breadcrumbs.length - 1
                    ? 'text-hust-blue font-bold pointer-events-none'
                    : 'text-gray-500 hover:text-hust-blue'
                }`}
              >
                {breadcrumb.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
