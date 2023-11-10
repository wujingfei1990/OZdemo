// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

/// @title OIK代币合约
/// @author @Jace,@Clay
/// @notice OIK是Space Nation系列游戏的生态系统代币。总供应量为1,000,000,000，分10年逐步解锁。不会再有任何发行。
/// @dev ERC20代币合约，实现基于LayerZero的跨链Token，实现显示释放和质押锁仓功能
/**
 * 第一步：实现跨链erc20
 * 第二步：实现显示释放和质押锁仓功能
 */

contract OFT is ERC20, Ownable, ERC20Permit {
    constructor(address initialOwner)
        ERC20("MyOFT", "MOFT")
        Ownable(initialOwner)
        ERC20Permit("MyToken")
    {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
