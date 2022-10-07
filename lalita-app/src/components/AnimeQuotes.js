/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GlobalService from "../service/Global.service";

const QUOTES = "_quotes";

const AnimeQuotes = () => {
    const [quotesData, setQuotesData] = useState();
    const [index, setIndex] = useState(0);
    const [previousIndex, setPreviousIndex] = useState(undefined);

    useEffect(() => {
        const getAnimeQuotesService = async () => {
            let quotes = await GlobalService.getAnimeQuotes();
            if (quotes.status === 200) {
                setQuotesData(quotes.data);
            } else {
                console.log(quotes);
            }
        };
        getAnimeQuotesService();
    }, []);

    const nextQuotes = () => {
        setPreviousIndex(index);
        let dataSize = quotesData?.length || 1;
        setIndex((index + 1) % dataSize);
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

    const getQuotesClassName = (i) => {
        if (i === index) {
            const delayClass = i !== 0 ? " delay-150" : "";
            return "cursor-pointer text-focus-in block" + delayClass;
        } else if (i === previousIndex) {
            return "text-blur-out h-0 opacity-0";
        }
        return "hidden";
    }

    return (
        <div>
            {quotesData
                ? quotesData.map(({ quote, character, anime }, i) => (
                    <>
                        <div id={i + QUOTES} key={i} onClick={skipQuotes} className={getQuotesClassName(i)}>
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
                        <div id="next-page" className="h-0 bottom-0 w-32">
                            <div className="absolute inset-x-0 lg:bottom-10 bottom-2 h-16 text-focus-in">
                                <a href="#section2" className="text-deep-purple-200 ">
                                    <i className="fas fa-angle-down mb-10 fa-2x animate-bounce w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </>
                ))
                :
                <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
        </div>
    );
};

export default AnimeQuotes;