import { TrackNextIcon, TrackPreviousIcon } from "@radix-ui/react-icons";
import { styled } from "../../stitches.config";
import { SimplifiedTrack } from "../spotify/types";
import { CurrentTrack } from "./CurrentTrack";
import { Toolbar, ToolbarButton } from "./Toolbar";
import { TracksVolumeSlider } from "./TracksVolumeSlider";

const StyledToolbar = styled(Toolbar, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 10,
  width: "100%",
  minWidth: "max-content",
  backgroundColor: "white",
});

interface Props {
  previousTrack?: SimplifiedTrack;
  currentTrack?: SimplifiedTrack;
  nextTrack?: SimplifiedTrack;
  volume: number;

  onPreviousTrackClick: (track: SimplifiedTrack) => void;
  onNextTrackClick: (track: SimplifiedTrack) => void;
  onVolumeChange: (volume: number) => void;
}

export const PlayerToolbar = ({
  currentTrack,
  previousTrack,
  nextTrack,
  volume,
  onVolumeChange,
  onPreviousTrackClick,
}: Props) => {
  return (
    <StyledToolbar>
      <div style={{ flexGrow: 1 }}>
        <ToolbarButton
          disabled={!previousTrack}
          onClick={() => {
            if (previousTrack) {
              onPreviousTrackClick(previousTrack);
            }
          }}
        >
          <TrackPreviousIcon />
        </ToolbarButton>

        {currentTrack && <CurrentTrack track={currentTrack} />}

        <ToolbarButton
          disabled={!nextTrack}
          onClick={() => {
            if (nextTrack) {
              onPreviousTrackClick(nextTrack);
            }
          }}
        >
          <TrackNextIcon />
        </ToolbarButton>
      </div>

      <div>
        <TracksVolumeSlider volume={volume} onVolumeChange={onVolumeChange} />
      </div>
    </StyledToolbar>
  );
};
