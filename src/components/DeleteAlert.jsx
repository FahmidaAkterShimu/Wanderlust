"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function DeleteAlert({ destination }) {
    const { _id, destinationName } = destination;

    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/destination/${_id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json"
            },
        })
        const data = await res.json();
        console.log(data);

        if (data.acknowledged) {
            toast.success("Package deleted successfully!");
        } else {
            toast.error("Failed to delete package.");
        }

        redirect('/destinations');
    }

    return (
        <AlertDialog>
            <Button variant="ghost" className='border border-[#EF4444] text-[#EF4444] rounded-none py-5.5 px-5 text-base font-medium flex items-center gap-1.5 cursor-pointer hover:bg-[#EF4444]/20'>
                <Trash2 className='w-5 h-5' /> Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Travel Package</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Are you sure you want to delete <strong>{destinationName}</strong>? This action cannot be undone and will permanently remove this travel package from the system.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Package
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}