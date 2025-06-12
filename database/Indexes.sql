CREATE INDEX idx_phases_game_id ON phases(game_id);
CREATE INDEX idx_messages_phase_id ON messages(phase_id);
CREATE INDEX idx_player_inventory_username ON player_inventory(username);
CREATE INDEX idx_player_achievements_username ON player_achievements(username);