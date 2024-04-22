import React, { useEffect, useState } from 'react';
import Lift from "../asset/Lift.webp"
import Spotify from "../asset/Spotify.png"
import Netflix from "../asset/Netflix.png"

function Media() {
  const [songInfo, setSongInfo] = useState({
    songName: "",
    songArtist: "",
    songImageUrl: ""
  });

  useEffect(() => {
    const getAccessToken = () => {
      return fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${client_id}:${client_secret}`)
        },
        body: 'grant_type=refresh_token&refresh_token=' + refresh_token
      })
      .then(response => response.json())
      .then(data => {
        access_token = data.access_token;
        setTimeout(getAccessToken, (data.expires_in - 60) * 1000);
        return access_token;
      })
      .catch(error => {
        console.error(error);
      });
    };
  
    const getSongInfo = () => {
      return fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${access_token}`
        }
      })
      .then(response => {
        if (response.status === 204) {
          return fetch('https://api.spotify.com/v1/me/player/recently-played', {
            headers: {
              'Authorization': `Bearer ${access_token}`
            }
          })
          .then(response => response.json())
          .then(data => {
            if (data && data.items.length > 0) {
              const lastPlayed = data.items[0].track;
              return {
                songName: lastPlayed.name,
                songArtist: lastPlayed.artists[0].name,
                songImageUrl: lastPlayed.album.images[0].url
              };
            } else {
              throw new Error('No recently played tracks found');
            }
          });
        } else {
          return response.json()
          .then(data => {
            return {
              songName: data.item.name,
              songArtist: data.item.artists[0].name,
              songImageUrl: data.item.album.images[0].url
            };
          });
        }
      })
      .catch(error => {
        console.error(error);
        document.getElementById('song').innerHTML = 'Error fetching song information';
      });
    };
  
    let access_token;
    const client_id = '04e5f488563f453a9550ff94b3d6295b';
    const client_secret = '9d5fdd0210a645ea998cf0e282efa020';
    const refresh_token = 'AQAvoj55ir8WPXvrcE_5kMyuQTzXgeA1Fx0BKC2Tz9Peg2bi9WjTLY7Ai3iADcHGG0fOzLzZYc2-eSMb65lGnG-EY_G6D-SnhSRywQn-WyJXmTSH_y0qE9CF87u3vd5133Y';
  
    const updateSongInfo = () => {
      getAccessToken()
      .then(() => {
        return getSongInfo();
      })
      .then(songInfo => {
        setSongInfo(songInfo);
      });
    };
  
    // Initial call to updateSongInfo
    updateSongInfo();
  
    // Set interval to refresh every 3 seconds
    const interval = setInterval(updateSongInfo, 1000);
  
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    
      <div id='Media' className='w-full flex flex-col px-6 justify-center mb-10 items-center'>
        <h1 className="font-semibold pt-24 md:pt-20 mb-10 text-A-writeup text-4xl">Media</h1>
        <div className='flex w-full md:w-[500px] flex-col'>
        <div className='w-full items-center justify-center'>
          <div className='flex mb-4 justify-between items-center'>
          <div className='flex items-center '>
            <img className='w-[30%]' src={Spotify} alt="" />
            <p className='text-lg'>Spotify</p>
            </div>
            <div >
              <p className='border border-A-writeup font-semibold rounded-sm text-A-writeup text-sm px-3'>API</p>
            </div>
          </div>
          <div className='mb-5 w-full flex'>
            <div className='flex items-center w-full bg-[#3d3d3d]'>
              <img className='w-[100px] md:w-[110px]' src={songInfo.songImageUrl} alt="Music" />
              <div className='pl-2  w-[100%] md:pl-[10px]'>
                <p className='border-A-writeup border-[1px] px-2 mb-1 text-gray-300 mt-2 inline text-[13px]'>Last played</p>
                <p className='text-[15px] text-gray-300 font-bold mt-[5px]'>{songInfo.songName}</p>
                <p className='text-[15px] text-gray-300  mt-[3px]'>{songInfo.songArtist}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full items-center justify-center'>
          <div className='flex justify-between items-center'>
          <div className='flex items-center '>
            <img className='w-[35%]' src={Netflix} alt="" />
            </div>
            <div>
              <p className='border border-A-writeup font-semibold rounded-sm text-A-writeup text-sm px-3'>API</p>
            </div>
          </div>
          <div className='mb-5 flex'>
            <div className='flex items-center w-full bg-[#3d3d3d]'>
              <img className='w-[120px] h-[110px] md:w-[110px]' src={Lift} alt="Music" />
              <div className='pl-2 w-full md:pl-[10px]'>
                <p className='border-A-writeup border-[1px] px-2 mb-1 text-gray-300 mt-2 inline text-[13px]'>Last Watched</p>
                <p className='text-[15px] text-gray-300 font-bold mt-[5px]'>Lift</p>
                <p className='text-[15px] text-gray-300  mt-[3px]'>2024 ‧ Comedy/Action ‧ 1h 47m</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Media;
