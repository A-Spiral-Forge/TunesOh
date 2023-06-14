import React from 'react';

// Import styles
import './Player.css';
import {
	PlayButton,
	PauseButton,
	ShuffleButton,
	PreviousButton,
	NextButton,
	RepeatButton,
} from './PlayerSongControlIcons';
import {
	MinimizeButton,
	MaximizeButton,
} from './PlayerModalControlIcons';
import {
	VolumeMaxIcon,
	VolumeMedIcon,
	VolumeMinIcon,
	VolumeOffIcon,
} from './PlayerVolumeControlIcons';

export default function Player() {
	const [minimized, setMinimized] = React.useState(false);
	const [volume, setVolume] = React.useState(0.67);

	return (
		<div 
			className='player'
			style={{
				transform: minimized ? 'translateY(calc(100% - 75px))' : 'translateY(0)',
			}}
		>
			<div className='player__header'>
				<h2>Now Playing</h2>
				<div className='player__minimize'>
					{minimized ? (
							<MaximizeButton setMinimized={setMinimized} />
						) : (
							<MinimizeButton setMinimized={setMinimized} />
						)
					}
				</div>
			</div>
			<div className='player__container'>
				<img
					className='player__album-cover'
					src={process.env.PUBLIC_URL + '/main-images/logo.jpeg'}
					alt='Album Cover'
				/>
				<div className='player__song-info'>
					<h4>Track Name</h4>
					<p>Artist Name</p>
				</div>

				<div className='player__volume'>
					<div className='player__volume_bar'>
						<div 
							className='player__volume_bar__progress' 
							style={{ height: '20%' }}
						></div>
					</div>
					<div className='player__volume_mute__control'>
						{
							(volume > 0.66) ? <VolumeMaxIcon /> :
							(volume > 0.33) ? <VolumeMedIcon /> :
							(volume > 0) ? <VolumeMinIcon /> :
							<VolumeOffIcon />
						}
					</div>
				</div>
			</div>

			<div className='player__controls'>
				<div className='player__shuffle'>
					<ShuffleButton />
				</div>
				<div className='player__previous'>
					<PreviousButton />
				</div>
				<div className='player__play'>
					{true ? <PauseButton /> : <PlayButton />}
				</div>
				<div className='player__next'>
					<NextButton />
				</div>
				<div className='player__repeat'>
					<RepeatButton />
				</div>
			</div>

			<div className='player__progress'>
				<p>--:--</p>
				<div className='player__progress-bar'>
					<div
						className='player__progress-bar__progress'
						style={{ width: '40px' }}
					></div>
				</div>
				<p>--:--</p>
			</div>
		</div>
	);
}
