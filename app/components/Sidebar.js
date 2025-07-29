'use client';

import Link from 'next/link';
import { Calendar, Clock, Play, MapPin, BookOpen, Mic, CalendarDays, Music } from 'lucide-react';
import { useEffect, useState } from 'react';

// JSON dosyasından veri yükleme fonksiyonu
const loadContentData = async () => {
  try {
    const response = await fetch('/data/content.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Veri yüklenirken hata oluştu:', error);
    return { writings: [], podcasts: [], events: [], performance: [] };
  }
};

// Son aktiviteleri birleştirip tarihe göre sıralama
const getRecentActivities = (data) => {
  const activities = [];
  
  // Writings
  data.writings.forEach(writing => {
    activities.push({
      ...writing,
      type: 'writing',
      typeLabel: 'Yazı',
      icon: BookOpen,
      link: `/writings/${writing.id}`,
      date: new Date(writing.date)
    });
  });
  
  // Podcasts
  data.podcasts.forEach(podcast => {
    activities.push({
      ...podcast,
      type: 'podcast',
      typeLabel: 'Podcast',
      icon: Mic,
      link: `/podcasts/${podcast.id}`,
      date: new Date(podcast.date)
    });
  });
  
  // Events
  data.events.forEach(event => {
    activities.push({
      ...event,
      type: 'event',
      typeLabel: 'Etkinlik',
      icon: CalendarDays,
      link: `/events/${event.id}`,
      date: new Date(event.date)
    });
  });
  
  // Performance
  data.performance.forEach(perf => {
    activities.push({
      ...perf,
      type: 'performance',
      typeLabel: 'Performans',
      icon: Music,
      link: `/performance/${perf.id}`,
      date: new Date(perf.date)
    });
  });
  
  // Tarihe göre sırala (en yeni önce)
  return activities.sort((a, b) => b.date - a.date).slice(0, 5);
};

export default function Sidebar({ showOnList = false }) {
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadContentData();
      const activities = getRecentActivities(data);
      setRecentActivities(activities);
      setLoading(false);
    };

    fetchData();
  }, []);

  const getActivityIcon = (activity) => {
    const IconComponent = activity.icon;
    return <IconComponent className="h-4 w-4" />;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      day: 'numeric',
      month: 'short'
    });
  };

  const getActivityExcerpt = (activity) => {
    if (activity.type === 'writing') {
      return activity.excerpt ? activity.excerpt.substring(0, 80) + '...' : 'Özet bulunmuyor.';
    } else if (activity.type === 'podcast') {
      return activity.subtitle || (activity.excerpt ? activity.excerpt.substring(0, 80) + '...' : 'Özet bulunmuyor.');
    } else {
      return activity.excerpt ? activity.excerpt.substring(0, 80) + '...' : 'Özet bulunmuyor.';
    }
  };

  if (loading) {
    return (
      <div className="hidden lg:block w-full lg:w-1/4 lg:pl-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Son Aktiviteler
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Eğer showOnList false ise (liste sayfalarında), sidebar'ı gösterme
  if (!showOnList) {
    return null;
  }

  return (
    <div className="hidden lg:block w-full lg:w-1/4 lg:pl-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Son Aktiviteler
        </h3>
        
        {recentActivities.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Henüz aktivite bulunmuyor.
          </p>
        ) : (
          <div className="space-y-6">
            {recentActivities.map((activity) => (
              <div key={`${activity.type}-${activity.id}`} className="border-b border-gray-100 pb-4 last:border-b-0">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-gray-600">
                        {getActivityIcon(activity)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {activity.typeLabel}
                      </span>
                      <span className="text-xs text-gray-400">
                        {formatDate(activity.date)}
                      </span>
                    </div>
                    
                    <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                      <Link 
                        href={activity.link}
                        className="hover:text-gray-700 transition-colors"
                      >
                        {activity.title}
                      </Link>
                    </h4>
                    
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {getActivityExcerpt(activity)}
                    </p>
                    
                    {activity.type === 'podcast' && (
                      <div className="flex items-center space-x-2 mt-2">
                        <Play className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {activity.duration}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">
                          {activity.platform}
                        </span>
                      </div>
                    )}
                    
                    {activity.type === 'event' && (
                      <div className="flex items-center space-x-2 mt-2">
                        <MapPin className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {activity.location}
                        </span>
                      </div>
                    )}
                    
                    {activity.type === 'writing' && (
                      <div className="flex items-center space-x-2 mt-2">
                        <Clock className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-500">
                          {activity.readTime}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link 
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Tüm aktiviteleri gör →
          </Link>
        </div>
      </div>
    </div>
  );
} 