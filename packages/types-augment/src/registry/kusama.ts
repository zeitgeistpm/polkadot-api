// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { BinaryHeapEnqueuedOrder, BinaryHeapReverseQueueIndex, FrameSupportTokensMiscIdAmount, PolkadotPrimitivesV7ApprovalVotingParams, PolkadotPrimitivesV7AssignmentAppPublic, PolkadotPrimitivesV7AsyncBackingAsyncBackingParams, PolkadotPrimitivesV7BackedCandidate, PolkadotPrimitivesV7CandidateCommitments, PolkadotPrimitivesV7CandidateDescriptor, PolkadotPrimitivesV7CandidateReceipt, PolkadotPrimitivesV7CollatorAppPublic, PolkadotPrimitivesV7CollatorAppSignature, PolkadotPrimitivesV7CommittedCandidateReceipt, PolkadotPrimitivesV7DisputeState, PolkadotPrimitivesV7DisputeStatement, PolkadotPrimitivesV7DisputeStatementSet, PolkadotPrimitivesV7ExecutorParams, PolkadotPrimitivesV7ExecutorParamsExecutorParam, PolkadotPrimitivesV7IndexedVecGroupIndex, PolkadotPrimitivesV7IndexedVecValidatorIndex, PolkadotPrimitivesV7InherentData, PolkadotPrimitivesV7InvalidDisputeStatementKind, PolkadotPrimitivesV7PvfCheckStatement, PolkadotPrimitivesV7PvfExecKind, PolkadotPrimitivesV7PvfPrepKind, PolkadotPrimitivesV7ScrapedOnChainVotes, PolkadotPrimitivesV7SessionInfo, PolkadotPrimitivesV7SignedUncheckedSigned, PolkadotPrimitivesV7SlashingDisputeProof, PolkadotPrimitivesV7SlashingDisputesTimeSlot, PolkadotPrimitivesV7SlashingPendingSlashes, PolkadotPrimitivesV7SlashingSlashingOffenceKind, PolkadotPrimitivesV7UpgradeGoAhead, PolkadotPrimitivesV7UpgradeRestriction, PolkadotPrimitivesV7ValidDisputeStatementKind, PolkadotPrimitivesV7ValidatorAppPublic, PolkadotPrimitivesV7ValidatorAppSignature, PolkadotPrimitivesV7ValidityAttestation, PolkadotPrimitivesVstagingSchedulerParams, PolkadotRuntimeParachainsAssignerCoretimeAssignmentState, PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor, PolkadotRuntimeParachainsAssignerCoretimePalletError, PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor, PolkadotRuntimeParachainsAssignerCoretimeSchedule, PolkadotRuntimeParachainsAssignerCoretimeWorkState, PolkadotRuntimeParachainsAssignerOnDemandPalletCall, PolkadotRuntimeParachainsAssignerOnDemandPalletError, PolkadotRuntimeParachainsAssignerOnDemandPalletEvent, PolkadotRuntimeParachainsAssignerOnDemandTypesCoreAffinityCount, PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder, PolkadotRuntimeParachainsAssignerOnDemandTypesQueueStatusType, PolkadotRuntimeParachainsCoretimePalletCall, PolkadotRuntimeParachainsCoretimePalletError, PolkadotRuntimeParachainsCoretimePalletEvent, PolkadotRuntimeParachainsParasUpgradeStrategy, StagingKusamaRuntimeDynamicParamsInflationFalloff, StagingKusamaRuntimeDynamicParamsInflationIdealStake, StagingKusamaRuntimeDynamicParamsInflationMaxInflation, StagingKusamaRuntimeDynamicParamsInflationMinInflation, StagingKusamaRuntimeDynamicParamsInflationParameters, StagingKusamaRuntimeDynamicParamsInflationParametersKey, StagingKusamaRuntimeDynamicParamsInflationParametersValue, StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots, StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin, StagingKusamaRuntimeNposCompactSolution24, StagingKusamaRuntimeOriginCaller, StagingKusamaRuntimeProxyType, StagingKusamaRuntimeRuntime, StagingKusamaRuntimeRuntimeFreezeReason, StagingKusamaRuntimeRuntimeHoldReason, StagingKusamaRuntimeRuntimeParameters, StagingKusamaRuntimeRuntimeParametersKey, StagingKusamaRuntimeRuntimeParametersValue, StagingKusamaRuntimeSessionKeys, XcmV3OriginKind } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    BinaryHeapEnqueuedOrder: BinaryHeapEnqueuedOrder;
    BinaryHeapReverseQueueIndex: BinaryHeapReverseQueueIndex;
    FrameSupportTokensMiscIdAmount: FrameSupportTokensMiscIdAmount;
    PolkadotPrimitivesV7ApprovalVotingParams: PolkadotPrimitivesV7ApprovalVotingParams;
    PolkadotPrimitivesV7AssignmentAppPublic: PolkadotPrimitivesV7AssignmentAppPublic;
    PolkadotPrimitivesV7AsyncBackingAsyncBackingParams: PolkadotPrimitivesV7AsyncBackingAsyncBackingParams;
    PolkadotPrimitivesV7BackedCandidate: PolkadotPrimitivesV7BackedCandidate;
    PolkadotPrimitivesV7CandidateCommitments: PolkadotPrimitivesV7CandidateCommitments;
    PolkadotPrimitivesV7CandidateDescriptor: PolkadotPrimitivesV7CandidateDescriptor;
    PolkadotPrimitivesV7CandidateReceipt: PolkadotPrimitivesV7CandidateReceipt;
    PolkadotPrimitivesV7CollatorAppPublic: PolkadotPrimitivesV7CollatorAppPublic;
    PolkadotPrimitivesV7CollatorAppSignature: PolkadotPrimitivesV7CollatorAppSignature;
    PolkadotPrimitivesV7CommittedCandidateReceipt: PolkadotPrimitivesV7CommittedCandidateReceipt;
    PolkadotPrimitivesV7DisputeState: PolkadotPrimitivesV7DisputeState;
    PolkadotPrimitivesV7DisputeStatement: PolkadotPrimitivesV7DisputeStatement;
    PolkadotPrimitivesV7DisputeStatementSet: PolkadotPrimitivesV7DisputeStatementSet;
    PolkadotPrimitivesV7ExecutorParams: PolkadotPrimitivesV7ExecutorParams;
    PolkadotPrimitivesV7ExecutorParamsExecutorParam: PolkadotPrimitivesV7ExecutorParamsExecutorParam;
    PolkadotPrimitivesV7IndexedVecGroupIndex: PolkadotPrimitivesV7IndexedVecGroupIndex;
    PolkadotPrimitivesV7IndexedVecValidatorIndex: PolkadotPrimitivesV7IndexedVecValidatorIndex;
    PolkadotPrimitivesV7InherentData: PolkadotPrimitivesV7InherentData;
    PolkadotPrimitivesV7InvalidDisputeStatementKind: PolkadotPrimitivesV7InvalidDisputeStatementKind;
    PolkadotPrimitivesV7PvfCheckStatement: PolkadotPrimitivesV7PvfCheckStatement;
    PolkadotPrimitivesV7PvfExecKind: PolkadotPrimitivesV7PvfExecKind;
    PolkadotPrimitivesV7PvfPrepKind: PolkadotPrimitivesV7PvfPrepKind;
    PolkadotPrimitivesV7ScrapedOnChainVotes: PolkadotPrimitivesV7ScrapedOnChainVotes;
    PolkadotPrimitivesV7SessionInfo: PolkadotPrimitivesV7SessionInfo;
    PolkadotPrimitivesV7SignedUncheckedSigned: PolkadotPrimitivesV7SignedUncheckedSigned;
    PolkadotPrimitivesV7SlashingDisputeProof: PolkadotPrimitivesV7SlashingDisputeProof;
    PolkadotPrimitivesV7SlashingDisputesTimeSlot: PolkadotPrimitivesV7SlashingDisputesTimeSlot;
    PolkadotPrimitivesV7SlashingPendingSlashes: PolkadotPrimitivesV7SlashingPendingSlashes;
    PolkadotPrimitivesV7SlashingSlashingOffenceKind: PolkadotPrimitivesV7SlashingSlashingOffenceKind;
    PolkadotPrimitivesV7UpgradeGoAhead: PolkadotPrimitivesV7UpgradeGoAhead;
    PolkadotPrimitivesV7UpgradeRestriction: PolkadotPrimitivesV7UpgradeRestriction;
    PolkadotPrimitivesV7ValidDisputeStatementKind: PolkadotPrimitivesV7ValidDisputeStatementKind;
    PolkadotPrimitivesV7ValidatorAppPublic: PolkadotPrimitivesV7ValidatorAppPublic;
    PolkadotPrimitivesV7ValidatorAppSignature: PolkadotPrimitivesV7ValidatorAppSignature;
    PolkadotPrimitivesV7ValidityAttestation: PolkadotPrimitivesV7ValidityAttestation;
    PolkadotPrimitivesVstagingSchedulerParams: PolkadotPrimitivesVstagingSchedulerParams;
    PolkadotRuntimeParachainsAssignerCoretimeAssignmentState: PolkadotRuntimeParachainsAssignerCoretimeAssignmentState;
    PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor: PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor;
    PolkadotRuntimeParachainsAssignerCoretimePalletError: PolkadotRuntimeParachainsAssignerCoretimePalletError;
    PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor: PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor;
    PolkadotRuntimeParachainsAssignerCoretimeSchedule: PolkadotRuntimeParachainsAssignerCoretimeSchedule;
    PolkadotRuntimeParachainsAssignerCoretimeWorkState: PolkadotRuntimeParachainsAssignerCoretimeWorkState;
    PolkadotRuntimeParachainsAssignerOnDemandPalletCall: PolkadotRuntimeParachainsAssignerOnDemandPalletCall;
    PolkadotRuntimeParachainsAssignerOnDemandPalletError: PolkadotRuntimeParachainsAssignerOnDemandPalletError;
    PolkadotRuntimeParachainsAssignerOnDemandPalletEvent: PolkadotRuntimeParachainsAssignerOnDemandPalletEvent;
    PolkadotRuntimeParachainsAssignerOnDemandTypesCoreAffinityCount: PolkadotRuntimeParachainsAssignerOnDemandTypesCoreAffinityCount;
    PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder: PolkadotRuntimeParachainsAssignerOnDemandTypesEnqueuedOrder;
    PolkadotRuntimeParachainsAssignerOnDemandTypesQueueStatusType: PolkadotRuntimeParachainsAssignerOnDemandTypesQueueStatusType;
    PolkadotRuntimeParachainsCoretimePalletCall: PolkadotRuntimeParachainsCoretimePalletCall;
    PolkadotRuntimeParachainsCoretimePalletError: PolkadotRuntimeParachainsCoretimePalletError;
    PolkadotRuntimeParachainsCoretimePalletEvent: PolkadotRuntimeParachainsCoretimePalletEvent;
    PolkadotRuntimeParachainsParasUpgradeStrategy: PolkadotRuntimeParachainsParasUpgradeStrategy;
    StagingKusamaRuntimeDynamicParamsInflationFalloff: StagingKusamaRuntimeDynamicParamsInflationFalloff;
    StagingKusamaRuntimeDynamicParamsInflationIdealStake: StagingKusamaRuntimeDynamicParamsInflationIdealStake;
    StagingKusamaRuntimeDynamicParamsInflationMaxInflation: StagingKusamaRuntimeDynamicParamsInflationMaxInflation;
    StagingKusamaRuntimeDynamicParamsInflationMinInflation: StagingKusamaRuntimeDynamicParamsInflationMinInflation;
    StagingKusamaRuntimeDynamicParamsInflationParameters: StagingKusamaRuntimeDynamicParamsInflationParameters;
    StagingKusamaRuntimeDynamicParamsInflationParametersKey: StagingKusamaRuntimeDynamicParamsInflationParametersKey;
    StagingKusamaRuntimeDynamicParamsInflationParametersValue: StagingKusamaRuntimeDynamicParamsInflationParametersValue;
    StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots: StagingKusamaRuntimeDynamicParamsInflationUseAuctionSlots;
    StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin: StagingKusamaRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    StagingKusamaRuntimeNposCompactSolution24: StagingKusamaRuntimeNposCompactSolution24;
    StagingKusamaRuntimeOriginCaller: StagingKusamaRuntimeOriginCaller;
    StagingKusamaRuntimeProxyType: StagingKusamaRuntimeProxyType;
    StagingKusamaRuntimeRuntime: StagingKusamaRuntimeRuntime;
    StagingKusamaRuntimeRuntimeFreezeReason: StagingKusamaRuntimeRuntimeFreezeReason;
    StagingKusamaRuntimeRuntimeHoldReason: StagingKusamaRuntimeRuntimeHoldReason;
    StagingKusamaRuntimeRuntimeParameters: StagingKusamaRuntimeRuntimeParameters;
    StagingKusamaRuntimeRuntimeParametersKey: StagingKusamaRuntimeRuntimeParametersKey;
    StagingKusamaRuntimeRuntimeParametersValue: StagingKusamaRuntimeRuntimeParametersValue;
    StagingKusamaRuntimeSessionKeys: StagingKusamaRuntimeSessionKeys;
    XcmV3OriginKind: XcmV3OriginKind;
  } // InterfaceTypes
} // declare module
