import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, ArrowRight, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { searchData, SearchItem } from '../constants/searchData';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleResultClick = (path: string) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:pt-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-hust-blue/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100 flex items-center space-x-4">
              <SearchIcon className="h-6 w-6 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search HUST (e.g. Nursing, Computing, Admissions...)"
                className="flex-grow bg-transparent border-none outline-none text-lg text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim().length > 1 ? (
                <div className="p-4">
                  {results.length > 0 ? (
                    <div className="space-y-2">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-2">
                        Search Results
                      </p>
                      {results.map((result, i) => (
                        <button
                          key={i}
                          onClick={() => handleResultClick(result.path)}
                          className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group text-left"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="p-2 bg-hust-blue/5 rounded-lg text-hust-blue">
                              <GraduationCap className="h-5 w-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-hust-blue leading-tight">{result.title}</h4>
                              <div className="flex items-center space-x-2 mt-0.5">
                                <p className="text-[10px] text-hust-accent font-black uppercase tracking-widest">{result.category}</p>
                                {result.description && (
                                  <>
                                    <span className="text-gray-300 text-[10px]">•</span>
                                    <p className="text-[10px] text-gray-400 line-clamp-1">{result.description}</p>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-hust-accent transition-colors" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="py-12 text-center">
                      <p className="text-gray-500">No results found for "{query}"</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <SearchIcon className="h-12 w-12 text-gray-200" />
                  </div>
                  <p className="text-gray-500">Type at least 2 characters to start searching...</p>
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {['Nursing', 'Computing', 'Admissions', 'Contact', 'Fees'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-4 py-1.5 bg-gray-100 hover:bg-hust-blue/10 text-gray-600 rounded-full text-sm transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <span>Hillside University of Science and Technology</span>
              <div className="flex items-center space-x-4">
                <span>ESC to close</span>
                <span>Enter to select</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
