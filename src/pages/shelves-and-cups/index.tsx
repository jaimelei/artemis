import { useState } from 'react';
import { usePageMeta } from '../../hooks/usePageMeta';
import { pageMeta } from '../../data/siteMetadata';
import { PageHeader } from '../../components/common/PageHeader';
import { FeaturedItem } from './components/FeaturedItem';
import { FilterToggle } from '../../components/ui/FilterToggle';
import { ShelvesGrid } from './components/ShelvesGrid';
import { NextPageLink } from '../../components/common/NextPageLink';
import { shelvesItems } from '../../data/shelvesData';

const filterOptions = [
  { value: 'all', label: 'All Items' },
  { value: 'book', label: 'Books' },
  { value: 'drink', label: 'Drinks' },
  { value: 'dessert', label: 'Desserts' },
];

export default function ShelvesAndCups() {
  usePageMeta(pageMeta['shelves-and-cups'].title, pageMeta['shelves-and-cups'].description);
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = shelvesItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="bg-moon-ivory">
      <PageHeader
        title="The Shelves & Cups"
        subtitle="Books worth losing an afternoon in. Drinks worth staying for."
      />

      <FeaturedItem />

      <FilterToggle
        options={filterOptions}
        selectedValue={activeFilter}
        onChange={setActiveFilter}
      />

      <ShelvesGrid
        items={filteredItems}
        activeFilter={activeFilter}
      />

      <NextPageLink
        to="/events"
        label="Explore Events"
      />
    </div>
  );
}
