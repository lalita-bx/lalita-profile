/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GlobalService from "../service/Global.service";
const QUOTES = "_quotes";

const AnimeQuotes = () => {
    const [quotesData, setQuotesData] = useState();
    const [index, setIndex] = useState(1);
    const [previousIndex, setPreviousIndex] = useState(0);

    useEffect(() => {
        const getAnimeQuotesService = async () => {
            let quotes = await GlobalService.getAnimeQuotes();
            if (quotes.status === 200) {
                setQuotesData(quotes.data);
                setTimeout(() => {
                    const newElement = document.getElementById(0 + QUOTES);
                    newElement.className = "cursor-pointer text-focus-in delay-300 block";
                }, 200);
            } else {
                console.log(quotes);
            }
        };
        getAnimeQuotesService();
    }, []);

    const setDisplay = () => {
        const oldElement = document.getElementById(previousIndex + QUOTES);
        const newElement = document.getElementById(index + QUOTES);
        oldElement.className = "text-blur-out h-0 opacity-0";
        newElement.className = "cursor-pointer text-focus-in delay-300 block";
    };

    const nextQuotes = () => {
        setPreviousIndex(index);
        let dataSize = quotesData?.length || 1;
        setIndex((index + 1) % dataSize);
        setDisplay();
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextQuotes();
        }, 8000);
        return () => clearInterval(interval);
    }, [previousIndex, index, quotesData]);

    const skipQuotes = () => {
        nextQuotes();
    }

    return (
        <div>
            {quotesData
                ? quotesData.map(({ quote, character, anime }, i) => (
                    <div id={i + QUOTES} key={i} onClick={skipQuotes} className="hidden">
                        <div className="lg:px-60 lg:text-3xl px-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300  via-deep-purple-200 to-pink-200 animate-text ">
                            <i className="fas fa-quote-left fa-sm px-3" />
                            {quote}
                            <i className="fas fa-quote-right fa-sm px-3" />
                        </div>

                        <div className="lg:text-base text-sm pt-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300  via-deep-purple-200 to-pink-200 animate-text ">
                            {character}
                            <br />
                            {anime}
                            <br />
                        </div>
                    </div>
                ))
                : ""}
        </div>
    );
};

export default AnimeQuotes;
