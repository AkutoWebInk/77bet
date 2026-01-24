// CSS:
import styles from './VIP.module.css';
// VIP Icon
import vip from './assets/vip.png';

const VIP_LEVELS = [
    { name: 'Bronze', minPoints: 0 },
    { name: 'Prata', minPoints: 1000 },
    { name: 'Ouro', minPoints: 5000 },
    { name: 'Platina', minPoints: 15000 },
    { name: 'Diamante', minPoints: 50000 },
    { name: 'Mestre', minPoints: 100000 },
];

const getCurrentLevelInfo = (progress) => {
    const levelIndex = Math.floor(progress / 20);
    const currentLevel = VIP_LEVELS[levelIndex] || VIP_LEVELS[0];
    const nextLevel = VIP_LEVELS[levelIndex + 1] || VIP_LEVELS[VIP_LEVELS.length - 1];
    return { currentLevel, nextLevel };
};

export default function VIP({ vipProgress }) {
    const { currentLevel, nextLevel } = getCurrentLevelInfo(vipProgress);

    return (
        <section className={styles.component}>
            <div className={styles.header}>
                <img src={vip} className={styles.vipIcon} alt="VIP" />
                <h3 className={styles.title}>Clube VIP</h3>
            </div>

            <div className={styles.levels}>
                <span className={styles.levelName}>{currentLevel.name}</span>
                <span className={styles.levelNameNext}>{nextLevel.name}</span>
            </div>

            <div className={styles.progressBarContainer} title={`Progresso: ${vipProgress}%`}>
                <div className={styles.progressBar} style={{ width: `${vipProgress}%` }}>
                    <span className={styles.progressText}>{vipProgress}%</span>
                </div>
            </div>
            
            <p className={styles.infoText}>
                Continue jogando para desbloquear recompensas exclusivas!
            </p>
        </section>
    );
}
