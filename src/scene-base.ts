export const legacyCompatibleImages: string[] = [];

export class SceneBase extends Phaser.Scene {
	constructor(config?: string | Phaser.Types.Scenes.SettingsConfig) {
		super(config);
	}

	getCachedUrl(url: string): string {
		const manifest = this.game['manifest'];
		if (manifest) {
			const timestamp = manifest[`/${url}`];
			if (timestamp)
				url += `?t=${timestamp}`;
		}
		return url;
		// return "https://raw.githubusercontent.com/rei1mu/pokerogue/1.0/public/" + url;
		//return "https://cdn.jsdelivr.net/gh/rei1mu/pokerogue@1.0/public/" + url;
		// return "https://fastly.jsdelivr.net/gh/rei1mu/pokerogue@1.0/public/" + url;
		 //return "https://b.pokerogue.cn/dist/" + url
		//return "https://43.133.212.76/dist/"+url
		// return "https://poke-1257649163.cos.ap-singapore.myqcloud.com/"+ url;
	}

	loadImage(key: string, folder: string, filename?: string) {
		if (!filename)
			filename = `${key}.png`;
		
		this.load.image(key, this.getCachedUrl(`images/${folder}/${filename}`));
		if (folder.startsWith('ui')) {
			legacyCompatibleImages.push(key);
			folder = folder.replace('ui', 'ui/legacy');
			// console.log(folder);
			// console.log(`${key}_legacy`,this.getCachedUrl(`images/${folder}/${filename}`))
			this.load.image(`${key}_legacy`, this.getCachedUrl(`images/${folder}/${filename}`));
		}
	}

	loadSpritesheet(key: string, folder: string, size: integer, filename?: string) {
		if (!filename)
			filename = `${key}.png`;
		this.load.spritesheet(key, this.getCachedUrl(`images/${folder}/${filename}`), { frameWidth: size, frameHeight: size });
		if (folder.startsWith('ui')) {
			legacyCompatibleImages.push(key);
			folder = folder.replace('ui', 'ui/legacy');
			this.load.spritesheet(`${key}_legacy`, this.getCachedUrl(`images/${folder}/${filename}`), { frameWidth: size, frameHeight: size });
		}
	}

	loadAtlas(key: string, folder: string, filenameRoot?: string) {
		if (!filenameRoot)
			filenameRoot = key;
		if (folder)
			folder += '/';
		this.load.atlas(key, this.getCachedUrl(`images/${folder}${filenameRoot}.png`), this.getCachedUrl(`images/${folder}/${filenameRoot}.json`));
		if (folder.startsWith('ui')) {
			legacyCompatibleImages.push(key);
			folder = folder.replace('ui', 'ui/legacy');
			this.load.atlas(`${key}_legacy`, this.getCachedUrl(`images/${folder}${filenameRoot}.png`), this.getCachedUrl(`images/${folder}/${filenameRoot}.json`));
		}
	}

	loadSe(key: string, folder?: string, filenames?: string | string[]) {
		if (!filenames)
			filenames = `${key}.wav`;
		if (!folder)
			folder = '';
		else
			folder += '/';
		if (!Array.isArray(filenames))
			filenames = [filenames];
		for (let f of filenames as string[])
			this.load.audio(key, this.getCachedUrl(`audio/se/${folder}${f}`));
	}

	loadBgm(key: string, filename?: string) {
		if (!filename)
			filename = `${key}.mp3`;
		this.load.audio(key, this.getCachedUrl(`audio/bgm/${filename}`));
	}
}