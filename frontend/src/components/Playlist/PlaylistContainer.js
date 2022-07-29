import './Playlist.css'

import PlaylistAddForm from './PlaylistAddForm'
import PlaylistForm from './PlaylistForm'

const PlaylistContainer = ({ songId, trigger, setTrigger }) => {
  return (
    <div>
      <PlaylistForm setTrigger={setTrigger} />
      <PlaylistAddForm songId={songId} trigger={trigger}/>
    </div>

  )
}

export default PlaylistContainer
