import { useState, useEffect } from 'react';
import axios from 'axios';

interface Work {
  service: string;
  title: string;
  imageDesktop: string;
  imageMobile: string;
  description: string;
  caseStudy: string;
  githubRepo: string;
  livePreview: string;
}

const useGetAllWorks = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/getAllWorks');
      setWorks(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { works, loading };
};

export default useGetAllWorks;