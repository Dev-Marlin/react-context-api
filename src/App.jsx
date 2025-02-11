import { useEffect, useState, createContext } from 'react'
import Header from './components/Header'
import Tweets from './components/Tweets'
import RightSide from './components/RightSide'
import defaultTweets from './assets/data/tweets.js'
import user from './assets/data/user.js'

const TweetContext = createContext();

function App() {
    const [tweets, setTweets] = useState(defaultTweets)
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        theme === 'light'
          ? document.body.style.backgroundColor = 'white'
          : document.body.style.backgroundColor = 'black'
    }, [theme])

    return (
        <div className="container">
            <TweetContext.Provider value={{user, tweets, setTweets}}>
                <Header  theme={theme} setTheme={setTheme} />
                <Tweets  setTweets={setTweets} theme={theme}  />
            </TweetContext.Provider>
                <RightSide theme={theme} />
        </div>
    )
}

export { App, TweetContext };
