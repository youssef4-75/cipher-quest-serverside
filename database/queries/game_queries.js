export const GET_ALL_GAMES = `
    SELECT 
        g.*,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', p.id,
                'description', p.description,
                'password', p.password,
                'explanation', p.explanation,
                'messages', (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'id', m.id,
                            'message_id', m.message_id,
                            'text', m.text,
                            'hash', m.hash,
                            'position_x', m.position_x,
                            'position_y', m.position_y
                        )
                    )
                    FROM messages m
                    WHERE m.phase_id = p.id
                )
            )
        ) as phases
    FROM games g
    LEFT JOIN phases p ON g.game_id = p.game_id
    GROUP BY g.game_id
`;

export const GET_GAME_BY_ID = `
    SELECT 
        g.*,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', p.id,
                'description', p.description,
                'password', p.password,
                'explanation', p.explanation,
                'messages', (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'id', m.id,
                            'message_id', m.message_id,
                            'text', m.text,
                            'hash', m.hash,
                            'position_x', m.position_x,
                            'position_y', m.position_y
                        )
                    )
                    FROM messages m
                    WHERE m.phase_id = p.id
                )
            )
        ) as phases
    FROM games g
    LEFT JOIN phases p ON g.game_id = p.game_id
    WHERE g.game_id = ?
    GROUP BY g.game_id
`;

export const GET_PHASES_BY_GAME_ID = `
    SELECT 
        p.*,
        JSON_ARRAYAGG(
            JSON_OBJECT(
                'id', m.id,
                'message_id', m.message_id,
                'text', m.text,
                'hash', m.hash,
                'position_x', m.position_x,
                'position_y', m.position_y
            )
        ) as messages
    FROM phases p
    LEFT JOIN messages m ON p.id = m.phase_id
    WHERE p.game_id = ?
    GROUP BY p.id
`;

export const GET_MESSAGES_BY_PHASE_ID = `
    SELECT *
    FROM messages
    WHERE phase_id = ?
`; 