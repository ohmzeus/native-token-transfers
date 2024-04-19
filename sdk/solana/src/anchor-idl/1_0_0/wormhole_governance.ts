export type WormholeGovernance = {
  "version": "1.0.0",
  "name": "wormhole_governance",
  "instructions": [
    {
      "name": "governance",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaa",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "replay",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "replayProtection",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidGovernanceChain",
      "msg": "InvalidGovernanceChain"
    },
    {
      "code": 6001,
      "name": "InvalidGovernanceEmitter",
      "msg": "InvalidGovernanceEmitter"
    }
  ]
};

export const IDL: WormholeGovernance = {
  "version": "1.0.0",
  "name": "wormhole_governance",
  "instructions": [
    {
      "name": "governance",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "governance",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaa",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "program",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "replay",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "replayProtection",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidGovernanceChain",
      "msg": "InvalidGovernanceChain"
    },
    {
      "code": 6001,
      "name": "InvalidGovernanceEmitter",
      "msg": "InvalidGovernanceEmitter"
    }
  ]
};
