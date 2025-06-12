drop database if exists cipher_quest;

create database cipher_quest;

use cipher_quest;

CREATE TABLE games (
    game_id VARCHAR(255) PRIMARY KEY,
    title TEXT NOT NULL,
    theme TEXT,
    description TEXT,
    image TEXT,
    difficulty VARCHAR(50),
    is_daily BOOLEAN,
    energy_cost INT,
    max_attempts INT,
    time_limit INT,
    length INT,
    detailed_description TEXT,
    final_solution_password TEXT,
    timed BOOLEAN DEFAULT true
);

CREATE TABLE phases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    game_id VARCHAR(255),
    description TEXT,
    password TEXT,
    explanation TEXT,
    FOREIGN KEY (game_id) REFERENCES games(game_id) ON DELETE CASCADE
);

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    phase_id INT,
    message_id INT,
    text TEXT,
    hash INT,
    position_x INT,
    position_y INT,
    FOREIGN KEY (phase_id) REFERENCES phases(id) ON DELETE CASCADE
);

CREATE TABLE players (
    username VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    member_since DATETIME NOT NULL,
    themes JSON,
    item_in_use INT
);

CREATE TABLE player_stats (
    username VARCHAR(255),
    level INT DEFAULT 1,
    points INT DEFAULT 0,
    energy INT DEFAULT 100,
    total_games_played INT DEFAULT 0,
    win_streak INT DEFAULT 0,
    longest_streak INT DEFAULT 0,
    phase_solved INT DEFAULT 0,
    well_attempts INT DEFAULT 0,
    total_attempts INT DEFAULT 0,
    accomplished_missions INT DEFAULT 0,
    success_rate FLOAT DEFAULT 0,
    PRIMARY KEY (username),
    FOREIGN KEY (username) REFERENCES players(username) ON DELETE CASCADE
);

CREATE TABLE player_collected_passwords (
    username VARCHAR(255),
    password TEXT,
    FOREIGN KEY (username) REFERENCES players(username) ON DELETE CASCADE
);

CREATE TABLE player_progress (
    username VARCHAR(255),
    current_game_id VARCHAR(255),
    current_phase INT,
    attempts INT,
    start_time DATETIME,
    entry_times JSON,
    themes JSON,
    PRIMARY KEY (username),
    FOREIGN KEY (username) REFERENCES players(username) ON DELETE CASCADE,
    FOREIGN KEY (current_game_id) REFERENCES games(game_id) ON DELETE SET NULL
);

CREATE TABLE player_achievements (
    username VARCHAR(255),
    achievement_id INT,
    PRIMARY KEY (username, achievement_id),
    FOREIGN KEY (username) REFERENCES players(username) ON DELETE CASCADE
);

CREATE TABLE player_inventory (
    username VARCHAR(255),
    item_id INT,
    quantity INT,
    PRIMARY KEY (username, item_id),
    FOREIGN KEY (username) REFERENCES players(username) ON DELETE CASCADE
);