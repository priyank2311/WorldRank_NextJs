import Head from 'next/head'
import { useState } from "react";
import Layout from '../componnets/Layout/Layout'
import styles from '../styles/Home.module.css'
import SearchInput from '../componnets/SearchInput/SearchInput';
import CountryTable from '../componnets/CountryTable/CountryTable';

export default function Home({ countries }) {
  console.log(countries);

  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(keyword)
  );

  const ouInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>

      <SearchInput placeholder='Enter Country Name' />

      <CountryTable countries={filteredCountries} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const countries = await res.json();

  return {
    props: {
      countries,
    }
  }
}

