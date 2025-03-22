console.log("Ejercicio 6: Playlist"); //Ok, conectado.
/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
    /**
     * Array of playlists in the catalog.
     * @type {Playlist[]}
     */
    let playlists = [];
  
    /** CORRECCIÓN: añadimos función auxiliar para búsqueda */

    const findPlaylist = (playlistName) => {
      const playlist = playlists.find((playlist) => playlist.name === playlistName);
      if (!playlist) {
        throw new Error("Playlist not found");
      }
      return playlist;
    };
  

    /**
     * Adds a new playlist to the catalog.
     * @param {string} playlistName - The name of the new playlist.
     */
    //Creamos la función con el spread operator como en el ejemplo de cart y para evitar los problemas de mutabilidad que nos daría si lo hicieramos con .push.
    //Añadimos una condición para que si no se introduce un nombre de playlist nos devuelva un error, como especie de control de errores:
    const createPlaylist = (playlistName) => {
      if (!playlistName) throw new Error("Playlist name is required");
      playlists = [...playlists, { name: playlistName, songs: [] }];
  };
  
  

    /**
     * Gets all playlists in the catalog.
     * @returns {Playlist[]} The list of all playlists.
     */
    const getAllPlaylists = () => playlists;
  


    /**
     * Removes a playlist from the catalog.
     * @param {string} playlistName - The name of the playlist to remove.
     */

    //Filter va a crear un nuevo array con todas las playlists excepto la que tiene el playlistName indicado.
    //Además, no modificams los datos iniciales, sino que creamos un nuevo array con los datos que queremos, por lo que no hay problemas de mutabilidad.
    const removePlaylist = (playlistName) => {
      playlists = playlists.filter(playlist => playlist.name !== playlistName);
      return playlists; //Sin el return borraba todas las playlists
  };


    /**
     * Adds a song to a specific playlist.
     * @param {string} playlistName - The name of the playlist to add the song to.
     * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
     * @throws {Error} If the playlist is not found.
     */
    const addSongToPlaylist = (playlistName, song) => {
      findPlaylist(playlistName);
      playlists = playlists.map((playlist) => {
        if (playlist.name === playlistName) {
          return {
            ...playlist,
            songs: [...playlist.songs, { ...song, favorite: false }],
          };
        }
        return playlist;
      });
    };
  
  
    /**
     * Removes a song from a specific playlist.
     * @param {string} playlistName - The name of the playlist to remove the song from.
     * @param {string} title - The title of the song to remove.
     * @throws {Error} If the playlist or song is not found.
     */
    const removeSongFromPlaylist = (playlistName, title) => {
      const hasPlaylist = findPlaylist(playlistName);
      if (!hasPlaylist.songs.find((song) => song.title === title)) {
        throw new Error("Song not found");
      }
      playlists = playlists.map((playlist) => {
        if (playlist.name === playlistName) {
          return {
            ...playlist,
            songs: playlist.songs.filter((song) => song.title !== title),
          };
        }
        return playlist;
      });
    };
  
    /**
     * Marks a song as a favorite or removes the favorite status.
     * @param {string} playlistName - The name of the playlist containing the song.
     * @param {string} title - The title of the song to mark as a favorite.
     */

    //Primero hay que encontrar la combinación de playlist y canción a marcar. Hacemos dos partes de código similares; primero par la playlist y luego para la canción, ambos con control de errores. 
    // Sustituimos el uso de .find, que estaba mal porque da
    //problemas con la mutabilidad, por .map, que es más seguro.
    
    const favoriteSong = (playlistName, title) => {
      playlists = playlists.map((playlist) => {
        if (playlist.name === playlistName) {
          return {
            ...playlist,
            songs: playlist.songs.map((song) => {
              if (song.title === title) {
                return {
                  ...song,
                  favorite: !song.favorite,
                };
              }
              return song;
            }),
          };
        }
        return playlist;
      });
    };
  
  
    /**
     * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
     * @param {string} playlistName - The name of the playlist to sort songs in.
     * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
     * @returns {Song[]} The list of sorted songs.
     * @throws {Error} If the playlist is not found or the criterion is invalid.
     */

    
    const sortSongs = (playlistName, criterion) => {
      findPlaylist(playlistName);
      if (!['title', 'artist', 'duration'].includes(criterion)) {
        throw new Error("Invalid sorting criterion");
      }
      playlists = playlists.map((playlist) => {
        if (playlist.name === playlistName) {
          return {
            ...playlist,
            songs: [...playlist.songs].sort((a, b) => {
              if (criterion === 'duration') {
                return a.duration - b.duration;
              }
              return a[criterion].localeCompare(b[criterion]);
            }),
          };
        }
        return playlist;
      });
    };
  
  







    return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
  };

  //Pruebas manuales:
 // Función createPlaylist:
  const catalog = musicCatalog();
  console.log(catalog.getAllPlaylists()); // Devolverá la lista de playlists vacía
  catalog.createPlaylist("Jazz");
  console.log(catalog.getAllPlaylists()); // Devolverá la lista de playlists con la playlist "Jazz"

  // Función removePlaylist:
  catalog.createPlaylist("Soul");
  catalog.createPlaylist("Pop");
  console.log(catalog.getAllPlaylists()); 
  
  catalog.removePlaylist("Soul");
  console.log(catalog.getAllPlaylists()); // Eliminará la playlist "Soul"

  catalog.addSongToPlaylist("Jazz", { title: "September Song", artist: "Sarah Vaughan", genre: "Jazz", duration: 100 });
  console.log(catalog.getAllPlaylists()); //OK, funciona.


//Paso 2: añadirmos el export default para poder mostrar el código:
  export default musicCatalog;
