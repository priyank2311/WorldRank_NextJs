import styles from './CountryTable.module.css';
import Link from 'next/link';

const orderBy = (countries, direction) => {
    if (direction === 'asc') {
        return [...countries].sort((a, b) =>
            a.population > b.population ? 1 : -1
        );
    }
    if (direction === 'desc') {
        return [...countries].sort((a, b) =>
            a.population > b.population ? -1 : 1
        );
    }
}

const CountryTable = ({ countries }) => {
    const orderdedCountries = orderBy(countries, 'desc');

    return (
        <div>
            <div className={styles.heading}>
                <button className={styles.heading_name}>
                    <div>Name</div>
                </button>
                <button className={styles.heading_population}>
                    <div>Population</div>
                </button>
            </div>
            {orderdedCountries.map((country) => (
                 <Link href={`/country/${country.alpha3Code}`} key={country.name}>
                 <div className={styles.row}>
                   <div className={styles.flag}>
                     <img src={country.flag} alt={country.name} />
                   </div>
                   <div className={styles.name}>{country.name}</div>
       
                   <div className={styles.population}>{country.population}</div>
       
                   <div className={styles.area}>{country.area || 0}</div>
       
                   <div className={styles.gini}>{country.gini || 0} %</div>
                 </div>
               </Link>
            ))}
        </div>
    )
}

export default CountryTable;
