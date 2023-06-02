import React, { Component } from 'react';

// Import CSS files
import './CreatePlaylistModal.css'; // CreatePlaylistModal CSS

// Import utility functions
import { Playlist } from '../../@types/playlists';

// Define type of props
interface IProps {
	playlists?: Playlist[];
	handlePlaylistChange?: (playlist: Playlist) => void;
	modalOpen: boolean;
	handleModalClose: (
		create?: boolean | undefined,
		playlistName?: string | undefined
	) => void;
}

interface IState {
	playlistName: string;
}

export default class CreatePlaylistModal extends Component<IProps, IState> {
	state: IState = {
		playlistName: '',
	};

	handlePlaylistNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ ...this.state, playlistName: event.target.value });
	};

	handleCreatePlaylist = () => {
		this.props.handleModalClose(true, this.state.playlistName);
	};

	handleModalClose = () => {
		this.props.handleModalClose();
	};

    preventPropogation = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

	render() {
		return (
			<div className={'modal ' + (this.props.modalOpen ? '' : 'hidden')}>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>Create Playlist</h5>
					</div>
					<div className='modal-body'>
						<form onSubmit={this.preventPropogation}>
							<div className='form-group'>
								<label htmlFor='playlistName'>
									Playlist Name
								</label>
								<input
									type='text'
									className='form-control'
									id='playlistName'
									placeholder='Enter playlist name'
									required={true}
									onChange={this.handlePlaylistNameChange}
								/>
							</div>
						</form>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								onClick={this.handleModalClose}
							>
								Close
							</button>
							<button
								type='button'
								className='btn btn-primary'
								onClick={this.handleCreatePlaylist}
							>
								Create Playlist
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
