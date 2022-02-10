"use strict";
self["webpackHotUpdate_N_E"]("src_App_tsx",{

/***/ "./src/components/Notifications/index.tsx":
/*!************************************************!*\
  !*** ./src/components/Notifications/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPersonalEscrowAta": function() { return /* binding */ getPersonalEscrowAta; },
/* harmony export */   "useCollapseWrappedSol": function() { return /* binding */ useCollapseWrappedSol; },
/* harmony export */   "useSettlementAuctions": function() { return /* binding */ useSettlementAuctions; },
/* harmony export */   "Notifications": function() { return /* binding */ Notifications; }
/* harmony export */ });
/* harmony import */ var C_Users_jinna_metaplex_js_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "../../node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "../../node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _oyster_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @oyster/common */ "../common/dist/lib/index.js");
/* harmony import */ var _oyster_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_oyster_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "../../node_modules/@solana/wallet-adapter-react/lib/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd */ "../../node_modules/antd/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_closePersonalEscrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/closePersonalEscrow */ "./src/actions/closePersonalEscrow.ts");
/* harmony import */ var _actions_decommAuctionManagerAndReturnPrizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/decommAuctionManagerAndReturnPrizes */ "./src/actions/decommAuctionManagerAndReturnPrizes.ts");
/* harmony import */ var _actions_sendSignMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/sendSignMetadata */ "./src/actions/sendSignMetadata.ts");
/* harmony import */ var _actions_unwindVault__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/unwindVault */ "./src/actions/unwindVault.ts");
/* harmony import */ var _actions_settle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/settle */ "./src/actions/settle.ts");
/* harmony import */ var _actions_startAuctionManually__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/startAuctionManually */ "./src/actions/startAuctionManually.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.tsx");
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../contexts */ "./src/contexts/index.tsx");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\jinna\\metaplex\\js\\packages\\web\\src\\components\\Notifications\\index.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_jinna_metaplex_js_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















var RunActionState;

(function (RunActionState) {
  RunActionState[RunActionState["NotRunning"] = 0] = "NotRunning";
  RunActionState[RunActionState["Running"] = 1] = "Running";
  RunActionState[RunActionState["Success"] = 2] = "Success";
  RunActionState[RunActionState["Failed"] = 3] = "Failed";
})(RunActionState || (RunActionState = {}));

function RunAction({
  id,
  action,
  onFinish,
  icon
}) {
  _s();

  const {
    0: state,
    1: setRunState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(RunActionState.NotRunning);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => setRunState(RunActionState.NotRunning), [id]);

  const run = async () => {
    await setRunState(RunActionState.Running);
    const result = await action();

    if (result) {
      await setRunState(RunActionState.Success);
      setTimeout(() => onFinish ? onFinish() : null, 2000); // Give user a sense of completion before removal from list
    } else {
      await setRunState(RunActionState.Failed);
    }
  };

  let component;

  switch (state) {
    case RunActionState.NotRunning:
      component = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
        className: "hover-button",
        onClick: run,
        children: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, this);
      break;

    case RunActionState.Failed:
      component = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
        className: "hover-button",
        onClick: run,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__.SyncOutlined, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, this);
      break;

    case RunActionState.Running:
      component = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__.LoadingOutlined, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }, this);
      break;

    case RunActionState.Success:
      component = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__.CheckCircleTwoTone, {
        twoToneColor: "#52c41a"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }, this);
  }

  return component;
}

_s(RunAction, "po2R9Af5mEBEp0JLZ0QLIFTBw+g=");

_c = RunAction;
async function getPersonalEscrowAta(wallet) {
  const PROGRAM_IDS = (0,_oyster_common__WEBPACK_IMPORTED_MODULE_2__.programIds)();
  if (!(wallet !== null && wallet !== void 0 && wallet.publicKey)) return;
  return (await (0,_oyster_common__WEBPACK_IMPORTED_MODULE_2__.findProgramAddress)([wallet.publicKey.toBuffer(), PROGRAM_IDS.token.toBuffer(), _constants__WEBPACK_IMPORTED_MODULE_10__.QUOTE_MINT.toBuffer()], PROGRAM_IDS.associatedToken))[0];
}
function useCollapseWrappedSol({
  connection,
  wallet,
  notifications
}) {
  _s2();

  const {
    0: showNotification,
    1: setShowNotification
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const fn = async () => {
    const ata = await getPersonalEscrowAta(wallet);

    if (ata) {
      try {
        const balance = await connection.getTokenAccountBalance((0,_oyster_common__WEBPACK_IMPORTED_MODULE_2__.toPublicKey)(ata));

        if (balance && balance.value.uiAmount || 0 > 0) {
          setShowNotification(true);
        } // eslint-disable-next-line no-empty

      } catch (e) {}
    }

    setTimeout(fn, 60000);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fn();
  }, []);

  if (showNotification) {
    notifications.push({
      id: 'unsettled',
      title: 'Unsettled funds!',
      description: 'You have unsettled royalties in your personal escrow account.',
      action: async () => {
        try {
          const ata = await getPersonalEscrowAta(wallet);

          if (ata) {
            const data = await connection.getAccountInfo((0,_oyster_common__WEBPACK_IMPORTED_MODULE_2__.toPublicKey)(ata));
            if (data !== null && data !== void 0 && data.data.length || 0 > 0) await (0,_actions_closePersonalEscrow__WEBPACK_IMPORTED_MODULE_4__.closePersonalEscrow)(connection, wallet, ata);
          }
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  }
}

_s2(useCollapseWrappedSol, "dtWb82bT/HR86rWZO5vsMFvqCM0=");

const CALLING_MUTEX = {};
function useSettlementAuctions({
  connection,
  wallet,
  notifications
}) {
  _s3();

  var _wallet$publicKey;

  const {
    accountByMint
  } = (0,_oyster_common__WEBPACK_IMPORTED_MODULE_2__.useUserAccounts)();
  const walletPubkey = wallet === null || wallet === void 0 ? void 0 : (_wallet$publicKey = wallet.publicKey) === null || _wallet$publicKey === void 0 ? void 0 : _wallet$publicKey.toBase58();
  const {
    bidderPotsByAuctionAndBidder,
    pullAuctionPage
  } = (0,_contexts__WEBPACK_IMPORTED_MODULE_11__.useMeta)();
  const auctionsNeedingSettling = [...(0,_hooks__WEBPACK_IMPORTED_MODULE_12__.useAuctions)(_hooks__WEBPACK_IMPORTED_MODULE_12__.AuctionViewState.Ended), ...(0,_hooks__WEBPACK_IMPORTED_MODULE_12__.useAuctions)(_hooks__WEBPACK_IMPORTED_MODULE_12__.AuctionViewState.BuyNow)];
  const {
    0: validDiscoveredEndedAuctions,
    1: setValidDiscoveredEndedAuctions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    const f = async () => {
      const nextBatch = auctionsNeedingSettling.filter(a => {
        const isEndedInstantSale = a.isInstantSale && a.items.length === a.auction.info.bidState.bids.length;
        return walletPubkey && a.auctionManager.authority === walletPubkey && (a.auction.info.ended() || isEndedInstantSale);
      }).sort((a, b) => {
        var _b$auction$info$ended, _a$auction$info$ended;

        return (((_b$auction$info$ended = b.auction.info.endedAt) === null || _b$auction$info$ended === void 0 ? void 0 : _b$auction$info$ended.toNumber()) || 0) - (((_a$auction$info$ended = a.auction.info.endedAt) === null || _a$auction$info$ended === void 0 ? void 0 : _a$auction$info$ended.toNumber()) || 0);
      });

      for (let i = 0; i < nextBatch.length; i++) {
        const av = nextBatch[i];

        if (!CALLING_MUTEX[av.auctionManager.pubkey]) {
          CALLING_MUTEX[av.auctionManager.pubkey] = true;

          try {
            const balance = await connection.getTokenAccountBalance((0,_oyster_common__WEBPACK_IMPORTED_MODULE_2__.toPublicKey)(av.auctionManager.acceptPayment));

            if ((balance.value.uiAmount || 0) === 0 && av.auction.info.bidState.bids.map(b => b.amount.toNumber()).reduce((acc, r) => acc += r, 0) > 0 || // FIXME: Why 0.01? If this is used,
            //        no auctions with lower prices (e.g. 0.0001) appear in notifications,
            //        thus making settlement of such an auction impossible.
            //        Temporarily making the number a lesser one.
            // (balance.value.uiAmount || 0) > 0.01
            (balance.value.uiAmount || 0) > 0.00001) {
              setValidDiscoveredEndedAuctions(old => _objectSpread(_objectSpread({}, old), {}, {
                [av.auctionManager.pubkey]: balance.value.uiAmount || 0
              }));
            }
          } catch (e) {
            console.error(e);
          }
        }
      }
    };

    f();
  }, [auctionsNeedingSettling.length, walletPubkey]);
  Object.keys(validDiscoveredEndedAuctions).forEach(auctionViewKey => {
    const auctionView = auctionsNeedingSettling.find(a => a.auctionManager.pubkey === auctionViewKey);
    if (!auctionView) return;
    const winners = [...auctionView.auction.info.bidState.bids].reverse().slice(0, auctionView.auctionManager.numWinners.toNumber()).reduce((acc, r) => {
      acc[r.key] = true;
      return acc;
    }, {});
    const myPayingAccount = accountByMint.get(auctionView.auction.info.tokenMint);
    const auctionKey = auctionView.auction.pubkey;
    const bidsToClaim = Object.values(bidderPotsByAuctionAndBidder).filter(b => winners[b.info.bidderAct] && !b.info.emptied && b.info.auctionAct === auctionKey);
    if (bidsToClaim.length || validDiscoveredEndedAuctions[auctionViewKey] > 0) notifications.push({
      id: auctionViewKey,
      title: 'You have an ended auction that needs settling!',
      description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
        children: ["One of your auctions ended and it has monies that can be claimed. For more detail,", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
          to: `/auction/${auctionKey}/billing`,
          children: "click here."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 11
      }, this),
      action: async () => {
        try {
          // pull missing data and complete the auction view to settle.
          const {
            auctionDataExtended,
            auctionManagersByAuction,
            safetyDepositBoxesByVaultAndIndex,
            metadataByMint,
            bidderMetadataByAuctionAndBidder: updatedBidderMetadataByAuctionAndBidder,
            bidderPotsByAuctionAndBidder,
            bidRedemptionV2sByAuctionManagerAndWinningIndex,
            masterEditions,
            vaults,
            safetyDepositConfigsByAuctionManagerAndIndex,
            masterEditionsByPrintingMint,
            masterEditionsByOneTimeAuthMint,
            metadataByMasterEdition,
            metadataByAuction
          } = await pullAuctionPage(auctionView.auction.pubkey);
          const completeAuctionView = (0,_hooks__WEBPACK_IMPORTED_MODULE_12__.processAccountsIntoAuctionView)(auctionView.auction.pubkey, auctionView.auction, auctionDataExtended, auctionManagersByAuction, safetyDepositBoxesByVaultAndIndex, metadataByMint, updatedBidderMetadataByAuctionAndBidder, bidderPotsByAuctionAndBidder, bidRedemptionV2sByAuctionManagerAndWinningIndex, masterEditions, vaults, safetyDepositConfigsByAuctionManagerAndIndex, masterEditionsByPrintingMint, masterEditionsByOneTimeAuthMint, metadataByMasterEdition, {}, metadataByAuction, undefined);

          if (completeAuctionView) {
            await (0,_actions_settle__WEBPACK_IMPORTED_MODULE_8__.settle)(connection, wallet, completeAuctionView, // Just claim all bidder pots
            bidsToClaim, myPayingAccount === null || myPayingAccount === void 0 ? void 0 : myPayingAccount.pubkey, accountByMint); // accept funds (open WSOL & close WSOL) only if Auction currency SOL

            if (wallet.publicKey && auctionView.auction.info.tokenMint == _oyster_common__WEBPACK_IMPORTED_MODULE_2__.WRAPPED_SOL_MINT.toBase58()) {
              const ata = await getPersonalEscrowAta(wallet);
              if (ata) await (0,_actions_closePersonalEscrow__WEBPACK_IMPORTED_MODULE_4__.closePersonalEscrow)(connection, wallet, ata);
            }
          }
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
}

_s3(useSettlementAuctions, "rjk6XU3qg7r4K1bBJv9lTk8UREA=", false, function () {
  return [_oyster_common__WEBPACK_IMPORTED_MODULE_2__.useUserAccounts, _contexts__WEBPACK_IMPORTED_MODULE_11__.useMeta, _hooks__WEBPACK_IMPORTED_MODULE_12__.useAuctions, _hooks__WEBPACK_IMPORTED_MODULE_12__.useAuctions];
});

function Notifications() {
  _s4();

  var _wallet$publicKey2;

  const {
    metadata,
    whitelistedCreatorsByCreator,
    store,
    vaults,
    safetyDepositBoxesByVaultAndIndex,
    pullAllSiteData
  } = (0,_contexts__WEBPACK_IMPORTED_MODULE_11__.useMeta)();
  const possiblyBrokenAuctionManagerSetups = (0,_hooks__WEBPACK_IMPORTED_MODULE_12__.useAuctions)(_hooks__WEBPACK_IMPORTED_MODULE_12__.AuctionViewState.Defective);
  const upcomingAuctions = (0,_hooks__WEBPACK_IMPORTED_MODULE_12__.useAuctions)(_hooks__WEBPACK_IMPORTED_MODULE_12__.AuctionViewState.Upcoming);
  const connection = (0,_oyster_common__WEBPACK_IMPORTED_MODULE_2__.useConnection)();
  const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet)();
  const notifications = [];
  const walletPubkey = ((_wallet$publicKey2 = wallet.publicKey) === null || _wallet$publicKey2 === void 0 ? void 0 : _wallet$publicKey2.toBase58()) || '';
  useCollapseWrappedSol({
    connection,
    wallet,
    notifications
  });
  useSettlementAuctions({
    connection,
    wallet,
    notifications
  });
  const vaultsNeedUnwinding = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => Object.values(vaults).filter(v => v.info.authority === walletPubkey && v.info.state !== _oyster_common__WEBPACK_IMPORTED_MODULE_2__.VaultState.Deactivated && v.info.tokenTypeCount > 0), [vaults, walletPubkey]);
  vaultsNeedUnwinding.forEach(v => {
    notifications.push({
      id: v.pubkey,
      title: 'You have items locked in a defective auction!',
      description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
        children: "During an auction creation process that probably had some issues, you lost an item. Reclaim it now."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 9
      }, this),
      action: async () => {
        try {
          await (0,_actions_unwindVault__WEBPACK_IMPORTED_MODULE_7__.unwindVault)(connection, wallet, v, safetyDepositBoxesByVaultAndIndex);
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
  notifications.push({
    id: 'none',
    title: 'Search for other auctions.',
    description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
      children: "Load all auctions (including defectives) by pressing here. Then you can close them."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 7
    }, this),
    action: async () => {
      try {
        await pullAllSiteData();
      } catch (e) {
        console.error(e);
        return false;
      }

      return true;
    }
  });
  possiblyBrokenAuctionManagerSetups.filter(v => v.auctionManager.authority === walletPubkey).forEach(v => {
    notifications.push({
      id: v.auctionManager.pubkey,
      title: 'You have items locked in a defective auction!',
      description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
        children: "During an auction creation process that probably had some issues, you lost an item. Reclaim it now."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 11
      }, this),
      action: async () => {
        try {
          await (0,_actions_decommAuctionManagerAndReturnPrizes__WEBPACK_IMPORTED_MODULE_5__.decommAuctionManagerAndReturnPrizes)(connection, wallet, v, safetyDepositBoxesByVaultAndIndex);
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
  const metaNeedsApproving = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => metadata.filter(m => {
    var _whitelistedCreatorsB, _whitelistedCreatorsB2;

    return m.info.data.creators && (((_whitelistedCreatorsB = whitelistedCreatorsByCreator[m.info.updateAuthority]) === null || _whitelistedCreatorsB === void 0 ? void 0 : (_whitelistedCreatorsB2 = _whitelistedCreatorsB.info) === null || _whitelistedCreatorsB2 === void 0 ? void 0 : _whitelistedCreatorsB2.activated) || (store === null || store === void 0 ? void 0 : store.info.public)) && m.info.data.creators.find(c => c.address === walletPubkey && !c.verified);
  }), [metadata, whitelistedCreatorsByCreator, walletPubkey]);
  metaNeedsApproving.forEach(m => {
    var _whitelistedCreatorsB3, _whitelistedCreatorsB4;

    notifications.push({
      id: m.pubkey,
      title: 'You have a new artwork to approve!',
      description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
        children: [((_whitelistedCreatorsB3 = whitelistedCreatorsByCreator[m.info.updateAuthority]) === null || _whitelistedCreatorsB3 === void 0 ? void 0 : (_whitelistedCreatorsB4 = _whitelistedCreatorsB3.info) === null || _whitelistedCreatorsB4 === void 0 ? void 0 : _whitelistedCreatorsB4.name) || m.pubkey, ' ', "wants you to approve that you helped create their art", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_15__.Link, {
          to: `/art/${m.pubkey}`,
          children: "here."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 489,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 9
      }, this),
      action: async () => {
        try {
          await (0,_actions_sendSignMetadata__WEBPACK_IMPORTED_MODULE_6__.sendSignMetadata)(connection, wallet, m.pubkey);
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
  upcomingAuctions.filter(v => v.auctionManager.authority === walletPubkey).forEach(v => {
    notifications.push({
      id: v.auctionManager.pubkey,
      title: 'You have an auction which is not started yet!',
      description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
        children: "You can activate it now if you wish."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 22
      }, this),
      action: async () => {
        try {
          await (0,_actions_startAuctionManually__WEBPACK_IMPORTED_MODULE_9__.startAuctionManually)(connection, wallet, v);
        } catch (e) {
          console.error(e);
          return false;
        }

        return true;
      }
    });
  });
  const content = notifications.length ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
    style: {
      width: '300px',
      color: 'white'
    },
    className: 'notifications-container',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_16__.List, {
      itemLayout: "vertical",
      size: "small",
      dataSource: notifications.slice(0, 10),
      renderItem: item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_16__.List.Item, {
        extra: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(RunAction, {
            id: item.id,
            action: item.action,
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__.PlayCircleOutlined, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 539,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 536,
            columnNumber: 17
          }, this), item.dismiss && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(RunAction, {
            id: item.id,
            action: item.dismiss,
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__.PlayCircleOutlined, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 545,
              columnNumber: 27
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 542,
            columnNumber: 19
          }, this)]
        }, void 0, true),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_16__.List.Item.Meta, {
          title: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
            children: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 552,
            columnNumber: 22
          }, this),
          description: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("i", {
              children: item.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 555,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 554,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 551,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 524,
    columnNumber: 5
  }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("span", {
    children: "No notifications"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 564,
    columnNumber: 5
  }, this);

  const justContent = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_16__.Popover, {
    placement: "bottomLeft",
    content: content,
    trigger: "click",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("img", {
      src: 'public/preLaunch/bell.svg',
      style: {
        cursor: 'pointer'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 569,
      columnNumber: 7
    }, this), !!notifications.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)("div", {
      className: "mobile-notification",
      children: notifications.length - 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 570,
      columnNumber: 34
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 568,
    columnNumber: 5
  }, this);

  if (notifications.length === 0) return justContent;else return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_16__.Badge, {
    count: notifications.length - 1,
    style: {
      backgroundColor: 'white',
      color: 'black'
    },
    children: justContent
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 577,
    columnNumber: 7
  }, this);
}

_s4(Notifications, "cJYIWxeCEoDw6XOE0OyxRdlaitU=", false, function () {
  return [_contexts__WEBPACK_IMPORTED_MODULE_11__.useMeta, _hooks__WEBPACK_IMPORTED_MODULE_12__.useAuctions, _hooks__WEBPACK_IMPORTED_MODULE_12__.useAuctions, _oyster_common__WEBPACK_IMPORTED_MODULE_2__.useConnection, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_3__.useWallet, useCollapseWrappedSol, useSettlementAuctions];
});

_c2 = Notifications;

var _c, _c2;

$RefreshReg$(_c, "RunAction");
$RefreshReg$(_c2, "Notifications");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3JjX0FwcF90c3guNjE4OTMxYjA0YmRlMTBiOTA5OWQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU1BO0FBV0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7SUFjSytCOztXQUFBQTtBQUFBQSxFQUFBQSxlQUFBQTtBQUFBQSxFQUFBQSxlQUFBQTtBQUFBQSxFQUFBQSxlQUFBQTtBQUFBQSxFQUFBQSxlQUFBQTtHQUFBQSxtQkFBQUE7O0FBT0wsU0FBU0MsU0FBVCxDQUFtQjtBQUNqQkMsRUFBQUEsRUFEaUI7QUFFakJDLEVBQUFBLE1BRmlCO0FBR2pCQyxFQUFBQSxRQUhpQjtBQUlqQkMsRUFBQUE7QUFKaUIsQ0FBbkIsRUFVRztBQUFBOztBQUNELFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUF1Qm5DLCtDQUFRLENBQ25DNEIsY0FBYyxDQUFDUSxVQURvQixDQUFyQztBQUlBckMsRUFBQUEsOENBQU8sQ0FBQyxNQUFNb0MsV0FBVyxDQUFDUCxjQUFjLENBQUNRLFVBQWhCLENBQWxCLEVBQStDLENBQUNOLEVBQUQsQ0FBL0MsQ0FBUDs7QUFFQSxRQUFNTyxHQUFHLEdBQUcsWUFBWTtBQUN0QixVQUFNRixXQUFXLENBQUNQLGNBQWMsQ0FBQ1UsT0FBaEIsQ0FBakI7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTVIsTUFBTSxFQUEzQjs7QUFDQSxRQUFJUSxNQUFKLEVBQVk7QUFDVixZQUFNSixXQUFXLENBQUNQLGNBQWMsQ0FBQ1ksT0FBaEIsQ0FBakI7QUFDQUMsTUFBQUEsVUFBVSxDQUFDLE1BQU9ULFFBQVEsR0FBR0EsUUFBUSxFQUFYLEdBQWdCLElBQWhDLEVBQXVDLElBQXZDLENBQVYsQ0FGVSxDQUU4QztBQUN6RCxLQUhELE1BR087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TzJHLFdBQVAsQ0FBaEMsS0FFRSxvQkFDRSwrREFBQyx3Q0FBRDtBQUNFLFNBQUssRUFBRTFILGFBQWEsQ0FBQ2UsTUFBZCxHQUF1QixDQURoQztBQUVFLFNBQUssRUFBRTtBQUFFNkcsTUFBQUEsZUFBZSxFQUFFLE9BQW5CO0FBQTRCTCxNQUFBQSxLQUFLLEVBQUU7QUFBbkMsS0FGVDtBQUFBLGNBSUdHO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUg7O0lBek9lNUI7VUFRVjNILGlEQUN1Q0csa0RBSWxCQSxrREFDTm5CLDJEQUNKSSxxRUFPZnVDLHVCQUVBcUI7OztNQXhCYzJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05vdGlmaWNhdGlvbnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIENoZWNrQ2lyY2xlVHdvVG9uZSxcclxuICBMb2FkaW5nT3V0bGluZWQsXHJcbiAgUGxheUNpcmNsZU91dGxpbmVkLFxyXG4gIFN5bmNPdXRsaW5lZCxcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7XHJcbiAgZmluZFByb2dyYW1BZGRyZXNzLFxyXG4gIHByb2dyYW1JZHMsXHJcbiAgU3RyaW5nUHVibGljS2V5LFxyXG4gIHRvUHVibGljS2V5LFxyXG4gIHVzZUNvbm5lY3Rpb24sXHJcbiAgdXNlVXNlckFjY291bnRzLFxyXG4gIFZhdWx0U3RhdGUsXHJcbiAgV2FsbGV0U2lnbmVyLFxyXG4gIFdSQVBQRURfU09MX01JTlQsXHJcbn0gZnJvbSAnQG95c3Rlci9jb21tb24nO1xyXG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XHJcbmltcG9ydCB7IEJhZGdlLCBQb3BvdmVyLCBMaXN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgY2xvc2VQZXJzb25hbEVzY3JvdyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY2xvc2VQZXJzb25hbEVzY3Jvdyc7XHJcbmltcG9ydCB7IGRlY29tbUF1Y3Rpb25NYW5hZ2VyQW5kUmV0dXJuUHJpemVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9kZWNvbW1BdWN0aW9uTWFuYWdlckFuZFJldHVyblByaXplcyc7XHJcbmltcG9ydCB7IHNlbmRTaWduTWV0YWRhdGEgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3NlbmRTaWduTWV0YWRhdGEnO1xyXG5pbXBvcnQgeyB1bndpbmRWYXVsdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdW53aW5kVmF1bHQnO1xyXG5pbXBvcnQgeyBzZXR0bGUgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3NldHRsZSc7XHJcbmltcG9ydCB7IHN0YXJ0QXVjdGlvbk1hbnVhbGx5IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9zdGFydEF1Y3Rpb25NYW51YWxseSc7XHJcbmltcG9ydCB7IFFVT1RFX01JTlQgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB1c2VNZXRhIH0gZnJvbSAnLi4vLi4vY29udGV4dHMnO1xyXG5pbXBvcnQge1xyXG4gIEF1Y3Rpb25WaWV3U3RhdGUsXHJcbiAgcHJvY2Vzc0FjY291bnRzSW50b0F1Y3Rpb25WaWV3LFxyXG4gIHVzZUF1Y3Rpb25zLFxyXG59IGZyb20gJy4uLy4uL2hvb2tzJztcclxuXHJcbmludGVyZmFjZSBOb3RpZmljYXRpb25DYXJkIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZyB8IEpTWC5FbGVtZW50O1xyXG4gIGFjdGlvbjogKCkgPT4gUHJvbWlzZTxib29sZWFuPjtcclxuICBkaXNtaXNzPzogKCkgPT4gUHJvbWlzZTxib29sZWFuPjtcclxufVxyXG5cclxuZW51bSBSdW5BY3Rpb25TdGF0ZSB7XHJcbiAgTm90UnVubmluZyxcclxuICBSdW5uaW5nLFxyXG4gIFN1Y2Nlc3MsXHJcbiAgRmFpbGVkLFxyXG59XHJcblxyXG5mdW5jdGlvbiBSdW5BY3Rpb24oe1xyXG4gIGlkLFxyXG4gIGFjdGlvbixcclxuICBvbkZpbmlzaCxcclxuICBpY29uLFxyXG59OiB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBhY3Rpb246ICgpID0+IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgb25GaW5pc2g/OiAoKSA9PiB2b2lkO1xyXG4gIGljb246IEpTWC5FbGVtZW50O1xyXG59KSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRSdW5TdGF0ZV0gPSB1c2VTdGF0ZTxSdW5BY3Rpb25TdGF0ZT4oXHJcbiAgICBSdW5BY3Rpb25TdGF0ZS5Ob3RSdW5uaW5nLFxyXG4gICk7XHJcblxyXG4gIHVzZU1lbW8oKCkgPT4gc2V0UnVuU3RhdGUoUnVuQWN0aW9uU3RhdGUuTm90UnVubmluZyksIFtpZF0pO1xyXG5cclxuICBjb25zdCBydW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBzZXRSdW5TdGF0ZShSdW5BY3Rpb25TdGF0ZS5SdW5uaW5nKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFjdGlvbigpO1xyXG4gICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICBhd2FpdCBzZXRSdW5TdGF0ZShSdW5BY3Rpb25TdGF0ZS5TdWNjZXNzKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiAob25GaW5pc2ggPyBvbkZpbmlzaCgpIDogbnVsbCksIDIwMDApOyAvLyBHaXZlIHVzZXIgYSBzZW5zZSBvZiBjb21wbGV0aW9uIGJlZm9yZSByZW1vdmFsIGZyb20gbGlzdFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgc2V0UnVuU3RhdGUoUnVuQWN0aW9uU3RhdGUuRmFpbGVkKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBsZXQgY29tcG9uZW50O1xyXG4gIHN3aXRjaCAoc3RhdGUpIHtcclxuICAgIGNhc2UgUnVuQWN0aW9uU3RhdGUuTm90UnVubmluZzpcclxuICAgICAgY29tcG9uZW50ID0gKFxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhvdmVyLWJ1dHRvblwiIG9uQ2xpY2s9e3J1bn0+XHJcbiAgICAgICAgICB7aWNvbn1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSdW5BY3Rpb25TdGF0ZS5GYWlsZWQ6XHJcbiAgICAgIGNvbXBvbmVudCA9IChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJob3Zlci1idXR0b25cIiBvbkNsaWNrPXtydW59PlxyXG4gICAgICAgICAgPFN5bmNPdXRsaW5lZCAvPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFJ1bkFjdGlvblN0YXRlLlJ1bm5pbmc6XHJcbiAgICAgIGNvbXBvbmVudCA9IDxMb2FkaW5nT3V0bGluZWQgLz47XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBSdW5BY3Rpb25TdGF0ZS5TdWNjZXNzOlxyXG4gICAgICBjb21wb25lbnQgPSA8Q2hlY2tDaXJjbGVUd29Ub25lIHR3b1RvbmVDb2xvcj1cIiM1MmM0MWFcIiAvPjtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQZXJzb25hbEVzY3Jvd0F0YShcclxuICB3YWxsZXQ6IFdhbGxldFNpZ25lciB8IHVuZGVmaW5lZFxyXG4pOiBQcm9taXNlPFN0cmluZ1B1YmxpY0tleSB8IHVuZGVmaW5lZD4ge1xyXG4gIGNvbnN0IFBST0dSQU1fSURTID0gcHJvZ3JhbUlkcygpO1xyXG4gIGlmICghd2FsbGV0Py5wdWJsaWNLZXkpIHJldHVybjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGF3YWl0IGZpbmRQcm9ncmFtQWRkcmVzcyhcclxuICAgICAgW1xyXG4gICAgICAgIHdhbGxldC5wdWJsaWNLZXkudG9CdWZmZXIoKSxcclxuICAgICAgICBQUk9HUkFNX0lEUy50b2tlbi50b0J1ZmZlcigpLFxyXG4gICAgICAgIFFVT1RFX01JTlQudG9CdWZmZXIoKSxcclxuICAgICAgXSxcclxuICAgICAgUFJPR1JBTV9JRFMuYXNzb2NpYXRlZFRva2VuLFxyXG4gICAgKVxyXG4gIClbMF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDb2xsYXBzZVdyYXBwZWRTb2woe1xyXG4gIGNvbm5lY3Rpb24sXHJcbiAgd2FsbGV0LFxyXG4gIG5vdGlmaWNhdGlvbnMsXHJcbn06IHtcclxuICBjb25uZWN0aW9uOiBDb25uZWN0aW9uO1xyXG4gIHdhbGxldDogV2FsbGV0U2lnbmVyO1xyXG4gIG5vdGlmaWNhdGlvbnM6IE5vdGlmaWNhdGlvbkNhcmRbXTtcclxufSkge1xyXG4gIGNvbnN0IFtzaG93Tm90aWZpY2F0aW9uLCBzZXRTaG93Tm90aWZpY2F0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBmbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGF0YSA9IGF3YWl0IGdldFBlcnNvbmFsRXNjcm93QXRhKHdhbGxldCk7XHJcbiAgICBpZiAoYXRhKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYmFsYW5jZSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0VG9rZW5BY2NvdW50QmFsYW5jZShcclxuICAgICAgICAgIHRvUHVibGljS2V5KGF0YSksXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKChiYWxhbmNlICYmIGJhbGFuY2UudmFsdWUudWlBbW91bnQpIHx8IDAgPiAwKSB7XHJcbiAgICAgICAgICBzZXRTaG93Tm90aWZpY2F0aW9uKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoZm4sIDYwMDAwKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmbigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKHNob3dOb3RpZmljYXRpb24pIHtcclxuICAgIG5vdGlmaWNhdGlvbnMucHVzaCh7XHJcbiAgICAgIGlkOiAndW5zZXR0bGVkJyxcclxuICAgICAgdGl0bGU6ICdVbnNldHRsZWQgZnVuZHMhJyxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ1lvdSBoYXZlIHVuc2V0dGxlZCByb3lhbHRpZXMgaW4geW91ciBwZXJzb25hbCBlc2Nyb3cgYWNjb3VudC4nLFxyXG4gICAgICBhY3Rpb246IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgYXRhID0gYXdhaXQgZ2V0UGVyc29uYWxFc2Nyb3dBdGEod2FsbGV0KTtcclxuICAgICAgICAgIGlmIChhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNvbm5lY3Rpb24uZ2V0QWNjb3VudEluZm8odG9QdWJsaWNLZXkoYXRhKSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhPy5kYXRhLmxlbmd0aCB8fCAwID4gMClcclxuICAgICAgICAgICAgICBhd2FpdCBjbG9zZVBlcnNvbmFsRXNjcm93KGNvbm5lY3Rpb24sIHdhbGxldCwgYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgQ0FMTElOR19NVVRFWDogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fTtcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNldHRsZW1lbnRBdWN0aW9ucyh7XHJcbiAgY29ubmVjdGlvbixcclxuICB3YWxsZXQsXHJcbiAgbm90aWZpY2F0aW9ucyxcclxufToge1xyXG4gIGNvbm5lY3Rpb246IENvbm5lY3Rpb247XHJcbiAgd2FsbGV0OiBXYWxsZXRTaWduZXI7XHJcbiAgbm90aWZpY2F0aW9uczogTm90aWZpY2F0aW9uQ2FyZFtdO1xyXG59KSB7XHJcbiAgY29uc3QgeyBhY2NvdW50QnlNaW50IH0gPSB1c2VVc2VyQWNjb3VudHMoKTtcclxuICBjb25zdCB3YWxsZXRQdWJrZXkgPSB3YWxsZXQ/LnB1YmxpY0tleT8udG9CYXNlNTgoKTtcclxuICBjb25zdCB7IGJpZGRlclBvdHNCeUF1Y3Rpb25BbmRCaWRkZXIsIHB1bGxBdWN0aW9uUGFnZSB9ID0gdXNlTWV0YSgpO1xyXG4gIGNvbnN0IGF1Y3Rpb25zTmVlZGluZ1NldHRsaW5nID0gW1xyXG4gICAgLi4udXNlQXVjdGlvbnMoQXVjdGlvblZpZXdTdGF0ZS5FbmRlZCksXHJcbiAgICAuLi51c2VBdWN0aW9ucyhBdWN0aW9uVmlld1N0YXRlLkJ1eU5vdyksXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW3ZhbGlkRGlzY292ZXJlZEVuZGVkQXVjdGlvbnMsIHNldFZhbGlkRGlzY292ZXJlZEVuZGVkQXVjdGlvbnNdID1cclxuICAgIHVzZVN0YXRlPFJlY29yZDxzdHJpbmcsIG51bWJlcj4+KHt9KTtcclxuICB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGYgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG5leHRCYXRjaCA9IGF1Y3Rpb25zTmVlZGluZ1NldHRsaW5nXHJcbiAgICAgICAgLmZpbHRlcihhID0+IHtcclxuICAgICAgICAgIGNvbnN0IGlzRW5kZWRJbnN0YW50U2FsZSA9XHJcbiAgICAgICAgICAgIGEuaXNJbnN0YW50U2FsZSAmJlxyXG4gICAgICAgICAgICBhLml0ZW1zLmxlbmd0aCA9PT0gYS5hdWN0aW9uLmluZm8uYmlkU3RhdGUuYmlkcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgd2FsbGV0UHVia2V5ICYmXHJcbiAgICAgICAgICAgIGEuYXVjdGlvbk1hbmFnZXIuYXV0aG9yaXR5ID09PSB3YWxsZXRQdWJrZXkgJiZcclxuICAgICAgICAgICAgKGEuYXVjdGlvbi5pbmZvLmVuZGVkKCkgfHwgaXNFbmRlZEluc3RhbnRTYWxlKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zb3J0KFxyXG4gICAgICAgICAgKGEsIGIpID0+XHJcbiAgICAgICAgICAgIChiLmF1Y3Rpb24uaW5mby5lbmRlZEF0Py50b051bWJlcigpIHx8IDApIC1cclxuICAgICAgICAgICAgKGEuYXVjdGlvbi5pbmZvLmVuZGVkQXQ/LnRvTnVtYmVyKCkgfHwgMCksXHJcbiAgICAgICAgKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXh0QmF0Y2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBhdiA9IG5leHRCYXRjaFtpXTtcclxuICAgICAgICBpZiAoIUNBTExJTkdfTVVURVhbYXYuYXVjdGlvbk1hbmFnZXIucHVia2V5XSkge1xyXG4gICAgICAgICAgQ0FMTElOR19NVVRFWFthdi5hdWN0aW9uTWFuYWdlci5wdWJrZXldID0gdHJ1ZTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2UgPSBhd2FpdCBjb25uZWN0aW9uLmdldFRva2VuQWNjb3VudEJhbGFuY2UoXHJcbiAgICAgICAgICAgICAgdG9QdWJsaWNLZXkoYXYuYXVjdGlvbk1hbmFnZXIuYWNjZXB0UGF5bWVudCksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAoKGJhbGFuY2UudmFsdWUudWlBbW91bnQgfHwgMCkgPT09IDAgJiZcclxuICAgICAgICAgICAgICAgIGF2LmF1Y3Rpb24uaW5mby5iaWRTdGF0ZS5iaWRzXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoYiA9PiBiLmFtb3VudC50b051bWJlcigpKVxyXG4gICAgICAgICAgICAgICAgICAucmVkdWNlKChhY2MsIHIpID0+IChhY2MgKz0gciksIDApID4gMCkgfHxcclxuICAgICAgICAgICAgICAvLyBGSVhNRTogV2h5IDAuMDE/IElmIHRoaXMgaXMgdXNlZCxcclxuICAgICAgICAgICAgICAvLyAgICAgICAgbm8gYXVjdGlvbnMgd2l0aCBsb3dlciBwcmljZXMgKGUuZy4gMC4wMDAxKSBhcHBlYXIgaW4gbm90aWZpY2F0aW9ucyxcclxuICAgICAgICAgICAgICAvLyAgICAgICAgdGh1cyBtYWtpbmcgc2V0dGxlbWVudCBvZiBzdWNoIGFuIGF1Y3Rpb24gaW1wb3NzaWJsZS5cclxuICAgICAgICAgICAgICAvLyAgICAgICAgVGVtcG9yYXJpbHkgbWFraW5nIHRoZSBudW1iZXIgYSBsZXNzZXIgb25lLlxyXG4gICAgICAgICAgICAgIC8vIChiYWxhbmNlLnZhbHVlLnVpQW1vdW50IHx8IDApID4gMC4wMVxyXG4gICAgICAgICAgICAgIChiYWxhbmNlLnZhbHVlLnVpQW1vdW50IHx8IDApID4gMC4wMDAwMVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICBzZXRWYWxpZERpc2NvdmVyZWRFbmRlZEF1Y3Rpb25zKG9sZCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgLi4ub2xkLFxyXG4gICAgICAgICAgICAgICAgW2F2LmF1Y3Rpb25NYW5hZ2VyLnB1YmtleV06IGJhbGFuY2UudmFsdWUudWlBbW91bnQgfHwgMCxcclxuICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmKCk7XHJcbiAgfSwgW2F1Y3Rpb25zTmVlZGluZ1NldHRsaW5nLmxlbmd0aCwgd2FsbGV0UHVia2V5XSk7XHJcblxyXG4gIE9iamVjdC5rZXlzKHZhbGlkRGlzY292ZXJlZEVuZGVkQXVjdGlvbnMpLmZvckVhY2goYXVjdGlvblZpZXdLZXkgPT4ge1xyXG4gICAgY29uc3QgYXVjdGlvblZpZXcgPSBhdWN0aW9uc05lZWRpbmdTZXR0bGluZy5maW5kKFxyXG4gICAgICBhID0+IGEuYXVjdGlvbk1hbmFnZXIucHVia2V5ID09PSBhdWN0aW9uVmlld0tleSxcclxuICAgICk7XHJcbiAgICBpZiAoIWF1Y3Rpb25WaWV3KSByZXR1cm47XHJcbiAgICBjb25zdCB3aW5uZXJzID0gWy4uLmF1Y3Rpb25WaWV3LmF1Y3Rpb24uaW5mby5iaWRTdGF0ZS5iaWRzXVxyXG4gICAgICAucmV2ZXJzZSgpXHJcbiAgICAgIC5zbGljZSgwLCBhdWN0aW9uVmlldy5hdWN0aW9uTWFuYWdlci5udW1XaW5uZXJzLnRvTnVtYmVyKCkpXHJcbiAgICAgIC5yZWR1Y2UoKGFjYzogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4sIHIpID0+IHtcclxuICAgICAgICBhY2Nbci5rZXldID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICB9LCB7fSk7XHJcblxyXG4gICAgY29uc3QgbXlQYXlpbmdBY2NvdW50ID0gYWNjb3VudEJ5TWludC5nZXQoXHJcbiAgICAgIGF1Y3Rpb25WaWV3LmF1Y3Rpb24uaW5mby50b2tlbk1pbnQsXHJcbiAgICApO1xyXG4gICAgY29uc3QgYXVjdGlvbktleSA9IGF1Y3Rpb25WaWV3LmF1Y3Rpb24ucHVia2V5O1xyXG4gICAgY29uc3QgYmlkc1RvQ2xhaW0gPSBPYmplY3QudmFsdWVzKGJpZGRlclBvdHNCeUF1Y3Rpb25BbmRCaWRkZXIpLmZpbHRlcihcclxuICAgICAgYiA9PlxyXG4gICAgICAgIHdpbm5lcnNbYi5pbmZvLmJpZGRlckFjdF0gJiZcclxuICAgICAgICAhYi5pbmZvLmVtcHRpZWQgJiZcclxuICAgICAgICBiLmluZm8uYXVjdGlvbkFjdCA9PT0gYXVjdGlvbktleSxcclxuICAgICk7XHJcbiAgICBpZiAoYmlkc1RvQ2xhaW0ubGVuZ3RoIHx8IHZhbGlkRGlzY292ZXJlZEVuZGVkQXVjdGlvbnNbYXVjdGlvblZpZXdLZXldID4gMClcclxuICAgICAgbm90aWZpY2F0aW9ucy5wdXNoKHtcclxuICAgICAgICBpZDogYXVjdGlvblZpZXdLZXksXHJcbiAgICAgICAgdGl0bGU6ICdZb3UgaGF2ZSBhbiBlbmRlZCBhdWN0aW9uIHRoYXQgbmVlZHMgc2V0dGxpbmchJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIE9uZSBvZiB5b3VyIGF1Y3Rpb25zIGVuZGVkIGFuZCBpdCBoYXMgbW9uaWVzIHRoYXQgY2FuIGJlIGNsYWltZWQuXHJcbiAgICAgICAgICAgIEZvciBtb3JlIGRldGFpbCx7JyAnfVxyXG4gICAgICAgICAgICA8TGluayB0bz17YC9hdWN0aW9uLyR7YXVjdGlvbktleX0vYmlsbGluZ2B9PmNsaWNrIGhlcmUuPC9MaW5rPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICksXHJcbiAgICAgICAgYWN0aW9uOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBwdWxsIG1pc3NpbmcgZGF0YSBhbmQgY29tcGxldGUgdGhlIGF1Y3Rpb24gdmlldyB0byBzZXR0bGUuXHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICBhdWN0aW9uRGF0YUV4dGVuZGVkLFxyXG4gICAgICAgICAgICAgIGF1Y3Rpb25NYW5hZ2Vyc0J5QXVjdGlvbixcclxuICAgICAgICAgICAgICBzYWZldHlEZXBvc2l0Qm94ZXNCeVZhdWx0QW5kSW5kZXgsXHJcbiAgICAgICAgICAgICAgbWV0YWRhdGFCeU1pbnQsXHJcbiAgICAgICAgICAgICAgYmlkZGVyTWV0YWRhdGFCeUF1Y3Rpb25BbmRCaWRkZXI6XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVkQmlkZGVyTWV0YWRhdGFCeUF1Y3Rpb25BbmRCaWRkZXIsXHJcbiAgICAgICAgICAgICAgYmlkZGVyUG90c0J5QXVjdGlvbkFuZEJpZGRlcixcclxuICAgICAgICAgICAgICBiaWRSZWRlbXB0aW9uVjJzQnlBdWN0aW9uTWFuYWdlckFuZFdpbm5pbmdJbmRleCxcclxuICAgICAgICAgICAgICBtYXN0ZXJFZGl0aW9ucyxcclxuICAgICAgICAgICAgICB2YXVsdHMsXHJcbiAgICAgICAgICAgICAgc2FmZXR5RGVwb3NpdENvbmZpZ3NCeUF1Y3Rpb25NYW5hZ2VyQW5kSW5kZXgsXHJcbiAgICAgICAgICAgICAgbWFzdGVyRWRpdGlvbnNCeVByaW50aW5nTWludCxcclxuICAgICAgICAgICAgICBtYXN0ZXJFZGl0aW9uc0J5T25lVGltZUF1dGhNaW50LFxyXG4gICAgICAgICAgICAgIG1ldGFkYXRhQnlNYXN0ZXJFZGl0aW9uLFxyXG4gICAgICAgICAgICAgIG1ldGFkYXRhQnlBdWN0aW9uLFxyXG4gICAgICAgICAgICB9ID0gYXdhaXQgcHVsbEF1Y3Rpb25QYWdlKGF1Y3Rpb25WaWV3LmF1Y3Rpb24ucHVia2V5KTtcclxuICAgICAgICAgICAgY29uc3QgY29tcGxldGVBdWN0aW9uVmlldyA9IHByb2Nlc3NBY2NvdW50c0ludG9BdWN0aW9uVmlldyhcclxuICAgICAgICAgICAgICBhdWN0aW9uVmlldy5hdWN0aW9uLnB1YmtleSxcclxuICAgICAgICAgICAgICBhdWN0aW9uVmlldy5hdWN0aW9uLFxyXG4gICAgICAgICAgICAgIGF1Y3Rpb25EYXRhRXh0ZW5kZWQsXHJcbiAgICAgICAgICAgICAgYXVjdGlvbk1hbmFnZXJzQnlBdWN0aW9uLFxyXG4gICAgICAgICAgICAgIHNhZmV0eURlcG9zaXRCb3hlc0J5VmF1bHRBbmRJbmRleCxcclxuICAgICAgICAgICAgICBtZXRhZGF0YUJ5TWludCxcclxuICAgICAgICAgICAgICB1cGRhdGVkQmlkZGVyTWV0YWRhdGFCeUF1Y3Rpb25BbmRCaWRkZXIsXHJcbiAgICAgICAgICAgICAgYmlkZGVyUG90c0J5QXVjdGlvbkFuZEJpZGRlcixcclxuICAgICAgICAgICAgICBiaWRSZWRlbXB0aW9uVjJzQnlBdWN0aW9uTWFuYWdlckFuZFdpbm5pbmdJbmRleCxcclxuICAgICAgICAgICAgICBtYXN0ZXJFZGl0aW9ucyxcclxuICAgICAgICAgICAgICB2YXVsdHMsXHJcbiAgICAgICAgICAgICAgc2FmZXR5RGVwb3NpdENvbmZpZ3NCeUF1Y3Rpb25NYW5hZ2VyQW5kSW5kZXgsXHJcbiAgICAgICAgICAgICAgbWFzdGVyRWRpdGlvbnNCeVByaW50aW5nTWludCxcclxuICAgICAgICAgICAgICBtYXN0ZXJFZGl0aW9uc0J5T25lVGltZUF1dGhNaW50LFxyXG4gICAgICAgICAgICAgIG1ldGFkYXRhQnlNYXN0ZXJFZGl0aW9uLFxyXG4gICAgICAgICAgICAgIHt9LFxyXG4gICAgICAgICAgICAgIG1ldGFkYXRhQnlBdWN0aW9uLFxyXG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGNvbXBsZXRlQXVjdGlvblZpZXcpIHtcclxuICAgICAgICAgICAgICBhd2FpdCBzZXR0bGUoXHJcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgd2FsbGV0LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVBdWN0aW9uVmlldyxcclxuICAgICAgICAgICAgICAgIC8vIEp1c3QgY2xhaW0gYWxsIGJpZGRlciBwb3RzXHJcbiAgICAgICAgICAgICAgICBiaWRzVG9DbGFpbSxcclxuICAgICAgICAgICAgICAgIG15UGF5aW5nQWNjb3VudD8ucHVia2V5LFxyXG4gICAgICAgICAgICAgICAgYWNjb3VudEJ5TWludCxcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIC8vIGFjY2VwdCBmdW5kcyAob3BlbiBXU09MICYgY2xvc2UgV1NPTCkgb25seSBpZiBBdWN0aW9uIGN1cnJlbmN5IFNPTFxyXG4gICAgICAgICAgICAgIGlmICh3YWxsZXQucHVibGljS2V5ICYmIGF1Y3Rpb25WaWV3LmF1Y3Rpb24uaW5mby50b2tlbk1pbnQgPT0gV1JBUFBFRF9TT0xfTUlOVC50b0Jhc2U1OCgpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhdGEgPSBhd2FpdCBnZXRQZXJzb25hbEVzY3Jvd0F0YSh3YWxsZXQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0YSkgYXdhaXQgY2xvc2VQZXJzb25hbEVzY3Jvdyhjb25uZWN0aW9uLCB3YWxsZXQsIGF0YSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTm90aWZpY2F0aW9ucygpIHtcclxuICBjb25zdCB7XHJcbiAgICBtZXRhZGF0YSxcclxuICAgIHdoaXRlbGlzdGVkQ3JlYXRvcnNCeUNyZWF0b3IsXHJcbiAgICBzdG9yZSxcclxuICAgIHZhdWx0cyxcclxuICAgIHNhZmV0eURlcG9zaXRCb3hlc0J5VmF1bHRBbmRJbmRleCxcclxuICAgIHB1bGxBbGxTaXRlRGF0YSxcclxuICB9ID0gdXNlTWV0YSgpO1xyXG4gIGNvbnN0IHBvc3NpYmx5QnJva2VuQXVjdGlvbk1hbmFnZXJTZXR1cHMgPSB1c2VBdWN0aW9ucyhcclxuICAgIEF1Y3Rpb25WaWV3U3RhdGUuRGVmZWN0aXZlLFxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHVwY29taW5nQXVjdGlvbnMgPSB1c2VBdWN0aW9ucyhBdWN0aW9uVmlld1N0YXRlLlVwY29taW5nKTtcclxuICBjb25zdCBjb25uZWN0aW9uID0gdXNlQ29ubmVjdGlvbigpO1xyXG4gIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xyXG5cclxuICBjb25zdCBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25DYXJkW10gPSBbXTtcclxuXHJcbiAgY29uc3Qgd2FsbGV0UHVia2V5ID0gd2FsbGV0LnB1YmxpY0tleT8udG9CYXNlNTgoKSB8fCAnJztcclxuXHJcblxyXG4gIHVzZUNvbGxhcHNlV3JhcHBlZFNvbCh7IGNvbm5lY3Rpb24sIHdhbGxldCwgbm90aWZpY2F0aW9ucyB9KTtcclxuXHJcbiAgdXNlU2V0dGxlbWVudEF1Y3Rpb25zKHsgY29ubmVjdGlvbiwgd2FsbGV0LCBub3RpZmljYXRpb25zIH0pO1xyXG5cclxuICBjb25zdCB2YXVsdHNOZWVkVW53aW5kaW5nID0gdXNlTWVtbyhcclxuICAgICgpID0+XHJcbiAgICAgIE9iamVjdC52YWx1ZXModmF1bHRzKS5maWx0ZXIoXHJcbiAgICAgICAgdiA9PlxyXG4gICAgICAgICAgdi5pbmZvLmF1dGhvcml0eSA9PT0gd2FsbGV0UHVia2V5ICYmXHJcbiAgICAgICAgICB2LmluZm8uc3RhdGUgIT09IFZhdWx0U3RhdGUuRGVhY3RpdmF0ZWQgJiZcclxuICAgICAgICAgIHYuaW5mby50b2tlblR5cGVDb3VudCA+IDAsXHJcbiAgICAgICksXHJcbiAgICBbdmF1bHRzLCB3YWxsZXRQdWJrZXldLFxyXG4gICk7XHJcblxyXG4gIHZhdWx0c05lZWRVbndpbmRpbmcuZm9yRWFjaCh2ID0+IHtcclxuICAgIG5vdGlmaWNhdGlvbnMucHVzaCh7XHJcbiAgICAgIGlkOiB2LnB1YmtleSxcclxuICAgICAgdGl0bGU6ICdZb3UgaGF2ZSBpdGVtcyBsb2NrZWQgaW4gYSBkZWZlY3RpdmUgYXVjdGlvbiEnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgRHVyaW5nIGFuIGF1Y3Rpb24gY3JlYXRpb24gcHJvY2VzcyB0aGF0IHByb2JhYmx5IGhhZCBzb21lIGlzc3VlcywgeW91XHJcbiAgICAgICAgICBsb3N0IGFuIGl0ZW0uIFJlY2xhaW0gaXQgbm93LlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSxcclxuICAgICAgYWN0aW9uOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IHVud2luZFZhdWx0KFxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLFxyXG4gICAgICAgICAgICB3YWxsZXQsXHJcbiAgICAgICAgICAgIHYsXHJcbiAgICAgICAgICAgIHNhZmV0eURlcG9zaXRCb3hlc0J5VmF1bHRBbmRJbmRleCxcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgbm90aWZpY2F0aW9ucy5wdXNoKHtcclxuICAgIGlkOiAnbm9uZScsXHJcbiAgICB0aXRsZTogJ1NlYXJjaCBmb3Igb3RoZXIgYXVjdGlvbnMuJyxcclxuICAgIGRlc2NyaXB0aW9uOiAoXHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIExvYWQgYWxsIGF1Y3Rpb25zIChpbmNsdWRpbmcgZGVmZWN0aXZlcykgYnkgcHJlc3NpbmcgaGVyZS4gVGhlbiB5b3UgY2FuXHJcbiAgICAgICAgY2xvc2UgdGhlbS5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgKSxcclxuICAgIGFjdGlvbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IHB1bGxBbGxTaXRlRGF0YSgpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBwb3NzaWJseUJyb2tlbkF1Y3Rpb25NYW5hZ2VyU2V0dXBzXHJcbiAgICAuZmlsdGVyKHYgPT4gdi5hdWN0aW9uTWFuYWdlci5hdXRob3JpdHkgPT09IHdhbGxldFB1YmtleSlcclxuICAgIC5mb3JFYWNoKHYgPT4ge1xyXG4gICAgICBub3RpZmljYXRpb25zLnB1c2goe1xyXG4gICAgICAgIGlkOiB2LmF1Y3Rpb25NYW5hZ2VyLnB1YmtleSxcclxuICAgICAgICB0aXRsZTogJ1lvdSBoYXZlIGl0ZW1zIGxvY2tlZCBpbiBhIGRlZmVjdGl2ZSBhdWN0aW9uIScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IChcclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICBEdXJpbmcgYW4gYXVjdGlvbiBjcmVhdGlvbiBwcm9jZXNzIHRoYXQgcHJvYmFibHkgaGFkIHNvbWUgaXNzdWVzLFxyXG4gICAgICAgICAgICB5b3UgbG9zdCBhbiBpdGVtLiBSZWNsYWltIGl0IG5vdy5cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApLFxyXG4gICAgICAgIGFjdGlvbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZGVjb21tQXVjdGlvbk1hbmFnZXJBbmRSZXR1cm5Qcml6ZXMoXHJcbiAgICAgICAgICAgICAgY29ubmVjdGlvbixcclxuICAgICAgICAgICAgICB3YWxsZXQsXHJcbiAgICAgICAgICAgICAgdixcclxuICAgICAgICAgICAgICBzYWZldHlEZXBvc2l0Qm94ZXNCeVZhdWx0QW5kSW5kZXgsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gIGNvbnN0IG1ldGFOZWVkc0FwcHJvdmluZyA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PlxyXG4gICAgICBtZXRhZGF0YS5maWx0ZXIobSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIG0uaW5mby5kYXRhLmNyZWF0b3JzICYmXHJcbiAgICAgICAgICAod2hpdGVsaXN0ZWRDcmVhdG9yc0J5Q3JlYXRvclttLmluZm8udXBkYXRlQXV0aG9yaXR5XT8uaW5mb1xyXG4gICAgICAgICAgICA/LmFjdGl2YXRlZCB8fFxyXG4gICAgICAgICAgICBzdG9yZT8uaW5mby5wdWJsaWMpICYmXHJcbiAgICAgICAgICBtLmluZm8uZGF0YS5jcmVhdG9ycy5maW5kKFxyXG4gICAgICAgICAgICBjID0+IGMuYWRkcmVzcyA9PT0gd2FsbGV0UHVia2V5ICYmICFjLnZlcmlmaWVkLFxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgW21ldGFkYXRhLCB3aGl0ZWxpc3RlZENyZWF0b3JzQnlDcmVhdG9yLCB3YWxsZXRQdWJrZXldLFxyXG4gICk7XHJcblxyXG4gIG1ldGFOZWVkc0FwcHJvdmluZy5mb3JFYWNoKG0gPT4ge1xyXG4gICAgbm90aWZpY2F0aW9ucy5wdXNoKHtcclxuICAgICAgaWQ6IG0ucHVia2V5LFxyXG4gICAgICB0aXRsZTogJ1lvdSBoYXZlIGEgbmV3IGFydHdvcmsgdG8gYXBwcm92ZSEnLFxyXG4gICAgICBkZXNjcmlwdGlvbjogKFxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAge3doaXRlbGlzdGVkQ3JlYXRvcnNCeUNyZWF0b3JbbS5pbmZvLnVwZGF0ZUF1dGhvcml0eV0/LmluZm8/Lm5hbWUgfHxcclxuICAgICAgICAgICAgbS5wdWJrZXl9eycgJ31cclxuICAgICAgICAgIHdhbnRzIHlvdSB0byBhcHByb3ZlIHRoYXQgeW91IGhlbHBlZCBjcmVhdGUgdGhlaXIgYXJ0eycgJ31cclxuICAgICAgICAgIDxMaW5rIHRvPXtgL2FydC8ke20ucHVia2V5fWB9PmhlcmUuPC9MaW5rPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKSxcclxuICAgICAgYWN0aW9uOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGF3YWl0IHNlbmRTaWduTWV0YWRhdGEoY29ubmVjdGlvbiwgd2FsbGV0LCBtLnB1YmtleSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgdXBjb21pbmdBdWN0aW9uc1xyXG4gICAgLmZpbHRlcih2ID0+IHYuYXVjdGlvbk1hbmFnZXIuYXV0aG9yaXR5ID09PSB3YWxsZXRQdWJrZXkpXHJcbiAgICAuZm9yRWFjaCh2ID0+IHtcclxuICAgICAgbm90aWZpY2F0aW9ucy5wdXNoKHtcclxuICAgICAgICBpZDogdi5hdWN0aW9uTWFuYWdlci5wdWJrZXksXHJcbiAgICAgICAgdGl0bGU6ICdZb3UgaGF2ZSBhbiBhdWN0aW9uIHdoaWNoIGlzIG5vdCBzdGFydGVkIHlldCEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiA8c3Bhbj5Zb3UgY2FuIGFjdGl2YXRlIGl0IG5vdyBpZiB5b3Ugd2lzaC48L3NwYW4+LFxyXG4gICAgICAgIGFjdGlvbjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgc3RhcnRBdWN0aW9uTWFudWFsbHkoY29ubmVjdGlvbiwgd2FsbGV0LCB2KTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgY29uc3QgY29udGVudCA9IG5vdGlmaWNhdGlvbnMubGVuZ3RoID8gKFxyXG4gICAgPGRpdlxyXG4gICAgICBzdHlsZT17eyB3aWR0aDogJzMwMHB4JywgY29sb3I6ICd3aGl0ZScgfX1cclxuICAgICAgY2xhc3NOYW1lPXsnbm90aWZpY2F0aW9ucy1jb250YWluZXInfVxyXG4gICAgPlxyXG4gICAgICA8TGlzdFxyXG4gICAgICAgIGl0ZW1MYXlvdXQ9XCJ2ZXJ0aWNhbFwiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBkYXRhU291cmNlPXtub3RpZmljYXRpb25zLnNsaWNlKDAsIDEwKX1cclxuICAgICAgICByZW5kZXJJdGVtPXsoaXRlbTogTm90aWZpY2F0aW9uQ2FyZCkgPT4gKFxyXG4gICAgICAgICAgPExpc3QuSXRlbVxyXG4gICAgICAgICAgICBleHRyYT17XHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxSdW5BY3Rpb25cclxuICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj17aXRlbS5hY3Rpb259XHJcbiAgICAgICAgICAgICAgICAgIGljb249ezxQbGF5Q2lyY2xlT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uZGlzbWlzcyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSdW5BY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249e2l0ZW0uZGlzbWlzc31cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXs8UGxheUNpcmNsZU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICB0aXRsZT17PHNwYW4+e2l0ZW0udGl0bGV9PC9zcGFuPn1cclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGk+e2l0ZW0uZGVzY3JpcHRpb259PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApIDogKFxyXG4gICAgPHNwYW4+Tm8gbm90aWZpY2F0aW9uczwvc3Bhbj5cclxuICApO1xyXG5cclxuICBjb25zdCBqdXN0Q29udGVudCA9IChcclxuICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbUxlZnRcIiBjb250ZW50PXtjb250ZW50fSB0cmlnZ2VyPVwiY2xpY2tcIj5cclxuICAgICAgPGltZyBzcmM9eydwdWJsaWMvcHJlTGF1bmNoL2JlbGwuc3ZnJ30gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gLz5cclxuICAgICAgeyEhbm90aWZpY2F0aW9ucy5sZW5ndGggJiYgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGUtbm90aWZpY2F0aW9uXCI+e25vdGlmaWNhdGlvbnMubGVuZ3RoIC0gMX08L2Rpdj59XHJcbiAgICA8L1BvcG92ZXI+XHJcbiAgKTtcclxuXHJcbiAgaWYgKG5vdGlmaWNhdGlvbnMubGVuZ3RoID09PSAwKSByZXR1cm4ganVzdENvbnRlbnQ7XHJcbiAgZWxzZVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEJhZGdlXHJcbiAgICAgICAgY291bnQ9e25vdGlmaWNhdGlvbnMubGVuZ3RoIC0gMX1cclxuICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsIGNvbG9yOiAnYmxhY2snIH19XHJcbiAgICAgID5cclxuICAgICAgICB7anVzdENvbnRlbnR9XHJcbiAgICAgIDwvQmFkZ2U+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsIkNoZWNrQ2lyY2xlVHdvVG9uZSIsIkxvYWRpbmdPdXRsaW5lZCIsIlBsYXlDaXJjbGVPdXRsaW5lZCIsIlN5bmNPdXRsaW5lZCIsImZpbmRQcm9ncmFtQWRkcmVzcyIsInByb2dyYW1JZHMiLCJ0b1B1YmxpY0tleSIsInVzZUNvbm5lY3Rpb24iLCJ1c2VVc2VyQWNjb3VudHMiLCJWYXVsdFN0YXRlIiwiV1JBUFBFRF9TT0xfTUlOVCIsInVzZVdhbGxldCIsIkJhZGdlIiwiUG9wb3ZlciIsIkxpc3QiLCJMaW5rIiwiY2xvc2VQZXJzb25hbEVzY3JvdyIsImRlY29tbUF1Y3Rpb25NYW5hZ2VyQW5kUmV0dXJuUHJpemVzIiwic2VuZFNpZ25NZXRhZGF0YSIsInVud2luZFZhdWx0Iiwic2V0dGxlIiwic3RhcnRBdWN0aW9uTWFudWFsbHkiLCJRVU9URV9NSU5UIiwidXNlTWV0YSIsIkF1Y3Rpb25WaWV3U3RhdGUiLCJwcm9jZXNzQWNjb3VudHNJbnRvQXVjdGlvblZpZXciLCJ1c2VBdWN0aW9ucyIsIlJ1bkFjdGlvblN0YXRlIiwiUnVuQWN0aW9uIiwiaWQiLCJhY3Rpb24iLCJvbkZpbmlzaCIsImljb24iLCJzdGF0ZSIsInNldFJ1blN0YXRlIiwiTm90UnVubmluZyIsInJ1biIsIlJ1bm5pbmciLCJyZXN1bHQiLCJTdWNjZXNzIiwic2V0VGltZW91dCIsIkZhaWxlZCIsImNvbXBvbmVudCIsImdldFBlcnNvbmFsRXNjcm93QXRhIiwid2FsbGV0IiwiUFJPR1JBTV9JRFMiLCJwdWJsaWNLZXkiLCJ0b0J1ZmZlciIsInRva2VuIiwiYXNzb2NpYXRlZFRva2VuIiwidXNlQ29sbGFwc2VXcmFwcGVkU29sIiwiY29ubmVjdGlvbiIsIm5vdGlmaWNhdGlvbnMiLCJzaG93Tm90aWZpY2F0aW9uIiwic2V0U2hvd05vdGlmaWNhdGlvbiIsImZuIiwiYXRhIiwiYmFsYW5jZSIsImdldFRva2VuQWNjb3VudEJhbGFuY2UiLCJ2YWx1ZSIsInVpQW1vdW50IiwiZSIsInB1c2giLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0YSIsImdldEFjY291bnRJbmZvIiwibGVuZ3RoIiwiY29uc29sZSIsImVycm9yIiwiQ0FMTElOR19NVVRFWCIsInVzZVNldHRsZW1lbnRBdWN0aW9ucyIsImFjY291bnRCeU1pbnQiLCJ3YWxsZXRQdWJrZXkiLCJ0b0Jhc2U1OCIsImJpZGRlclBvdHNCeUF1Y3Rpb25BbmRCaWRkZXIiLCJwdWxsQXVjdGlvblBhZ2UiLCJhdWN0aW9uc05lZWRpbmdTZXR0bGluZyIsIkVuZGVkIiwiQnV5Tm93IiwidmFsaWREaXNjb3ZlcmVkRW5kZWRBdWN0aW9ucyIsInNldFZhbGlkRGlzY292ZXJlZEVuZGVkQXVjdGlvbnMiLCJmIiwibmV4dEJhdGNoIiwiZmlsdGVyIiwiYSIsImlzRW5kZWRJbnN0YW50U2FsZSIsImlzSW5zdGFudFNhbGUiLCJpdGVtcyIsImF1Y3Rpb24iLCJpbmZvIiwiYmlkU3RhdGUiLCJiaWRzIiwiYXVjdGlvbk1hbmFnZXIiLCJhdXRob3JpdHkiLCJlbmRlZCIsInNvcnQiLCJiIiwiZW5kZWRBdCIsInRvTnVtYmVyIiwiaSIsImF2IiwicHVia2V5IiwiYWNjZXB0UGF5bWVudCIsIm1hcCIsImFtb3VudCIsInJlZHVjZSIsImFjYyIsInIiLCJvbGQiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImF1Y3Rpb25WaWV3S2V5IiwiYXVjdGlvblZpZXciLCJmaW5kIiwid2lubmVycyIsInJldmVyc2UiLCJzbGljZSIsIm51bVdpbm5lcnMiLCJrZXkiLCJteVBheWluZ0FjY291bnQiLCJnZXQiLCJ0b2tlbk1pbnQiLCJhdWN0aW9uS2V5IiwiYmlkc1RvQ2xhaW0iLCJ2YWx1ZXMiLCJiaWRkZXJBY3QiLCJlbXB0aWVkIiwiYXVjdGlvbkFjdCIsImF1Y3Rpb25EYXRhRXh0ZW5kZWQiLCJhdWN0aW9uTWFuYWdlcnNCeUF1Y3Rpb24iLCJzYWZldHlEZXBvc2l0Qm94ZXNCeVZhdWx0QW5kSW5kZXgiLCJtZXRhZGF0YUJ5TWludCIsImJpZGRlck1ldGFkYXRhQnlBdWN0aW9uQW5kQmlkZGVyIiwidXBkYXRlZEJpZGRlck1ldGFkYXRhQnlBdWN0aW9uQW5kQmlkZGVyIiwiYmlkUmVkZW1wdGlvblYyc0J5QXVjdGlvbk1hbmFnZXJBbmRXaW5uaW5nSW5kZXgiLCJtYXN0ZXJFZGl0aW9ucyIsInZhdWx0cyIsInNhZmV0eURlcG9zaXRDb25maWdzQnlBdWN0aW9uTWFuYWdlckFuZEluZGV4IiwibWFzdGVyRWRpdGlvbnNCeVByaW50aW5nTWludCIsIm1hc3RlckVkaXRpb25zQnlPbmVUaW1lQXV0aE1pbnQiLCJtZXRhZGF0YUJ5TWFzdGVyRWRpdGlvbiIsIm1ldGFkYXRhQnlBdWN0aW9uIiwiY29tcGxldGVBdWN0aW9uVmlldyIsInVuZGVmaW5lZCIsIk5vdGlmaWNhdGlvbnMiLCJtZXRhZGF0YSIsIndoaXRlbGlzdGVkQ3JlYXRvcnNCeUNyZWF0b3IiLCJzdG9yZSIsInB1bGxBbGxTaXRlRGF0YSIsInBvc3NpYmx5QnJva2VuQXVjdGlvbk1hbmFnZXJTZXR1cHMiLCJEZWZlY3RpdmUiLCJ1cGNvbWluZ0F1Y3Rpb25zIiwiVXBjb21pbmciLCJ2YXVsdHNOZWVkVW53aW5kaW5nIiwidiIsIkRlYWN0aXZhdGVkIiwidG9rZW5UeXBlQ291bnQiLCJtZXRhTmVlZHNBcHByb3ZpbmciLCJtIiwiY3JlYXRvcnMiLCJ1cGRhdGVBdXRob3JpdHkiLCJhY3RpdmF0ZWQiLCJwdWJsaWMiLCJjIiwiYWRkcmVzcyIsInZlcmlmaWVkIiwibmFtZSIsImNvbnRlbnQiLCJ3aWR0aCIsImNvbG9yIiwiaXRlbSIsImRpc21pc3MiLCJqdXN0Q29udGVudCIsImN1cnNvciIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=